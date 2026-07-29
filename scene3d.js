// ============================================================
// SCENE3D.JS — Scènes 3D superposées au tableau
// ============================================================

let renderer, scene, camera, animFrameId;
let canvas2D = null;
let canvas3D = null;

function getCanvasRefs() {
    if (typeof document === 'undefined') return { canvas2D: null, canvas3D: null };
    if (!canvas2D) canvas2D = document.getElementById('boardCanvas');
    if (!canvas3D) canvas3D = document.getElementById('threeCanvas');
    return { canvas2D, canvas3D };
}

function initThree() {
    const refs = getCanvasRefs();
    const { canvas2D: boardCanvas, canvas3D: threeCanvas } = refs;
    if (!boardCanvas || !threeCanvas || typeof window === 'undefined' || typeof window.THREE === 'undefined') {
        return false;
    }

    const w = boardCanvas.clientWidth;
    const h = boardCanvas.clientHeight;
    const THREE = window.THREE;

    renderer = new THREE.WebGLRenderer({ 
        canvas: threeCanvas, 
        alpha: true,        // fond transparent → on voit le tableau derrière
        antialias: true 
    });
    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);
    threeCanvas.style.display = 'block';

    scene  = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(0, 2, 8);
    camera.lookAt(0, 0, 0);

    // Lumières
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 10, 5);
    scene.add(dirLight);
}

function disposeThree() {
    cancelAnimationFrame(animFrameId);
    if (renderer) renderer.dispose();
    scene = null;
    camera = null;
    renderer = null;
    if (canvas3D) canvas3D.style.display = 'none';
}

// ============================================================
// SCÈNE : Corde à sauter entre deux poteaux
// ============================================================
export function sceneCordeSaut(onDone) {
    if (!initThree()) {
        if (typeof onDone === 'function') onDone();
        return;
    }

    // --- Sol ---
    const solGeo = new THREE.PlaneGeometry(12, 6);
    const solMat = new THREE.MeshLambertMaterial({ color: 0x2a5c2a });
    const sol = new THREE.Mesh(solGeo, solMat);
    sol.rotation.x = -Math.PI / 2;
    sol.position.y = -1.5;
    scene.add(sol);

    // --- Fonction poteau ---
    function makePoteau(x) {
        const geo = new THREE.CylinderGeometry(0.08, 0.08, 3, 16);
        const mat = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, 0, 0);
        scene.add(mesh);
        return mesh;
    }

    const poteauA = makePoteau(-3);
    const poteauB = makePoteau(3);

    // --- Labels A et B (sprites) ---
    function makeLabel(text, x, y, z) {
        const canvas = document.createElement('canvas');
        canvas.width = 128; canvas.height = 64;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgba(0,0,0,0)';
        ctx.fillRect(0, 0, 128, 64);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 48px Georgia';
        ctx.textAlign = 'center';
        ctx.fillText(text, 64, 48);
        const tex = new THREE.CanvasTexture(canvas);
        const mat = new THREE.SpriteMaterial({ map: tex, transparent: true });
        const sprite = new THREE.Sprite(mat);
        sprite.scale.set(0.8, 0.4, 1);
        sprite.position.set(x, y, z);
        scene.add(sprite);
    }

    makeLabel('A', -3, 2.2, 0);
    makeLabel('B',  3, 2.2, 0);

    // --- Corde (courbe caténaire) ---
    // On anime la corde qui apparaît progressivement
    const points = [];
    const N = 40;
    for (let i = 0; i <= N; i++) {
        const t = i / N;
        const x = -3 + t * 6;                          // de -3 à 3
        const y = 1.2 + 0.4 * Math.cosh((x) / 3) - 0.4 * Math.cosh(0) ; // caténaire
        points.push(new THREE.Vector3(x, y, 0));
    }

    const cordeCurve = new THREE.CatmullRomCurve3(points);
    
    // On dessine la corde progressivement
    let progress = 0;
    const cordeMatLine = new THREE.LineBasicMaterial({ color: 0xff6b35, linewidth: 3 });
    let cordeMesh = null;

    // --- Segment droit AB (la corde géométrique) ---
    // Apparaît après la corde à sauter
    let segmentMesh = null;

    // --- Boucle d'animation ---
    let phase = 'corde';   // phases : corde → pause → segment → done
    let pauseTimer = 0;
    let segProgress = 0;

    function animate() {
        animFrameId = requestAnimationFrame(animate);

        if (phase === 'corde') {
            progress = Math.min(1, progress + 0.008);

            // Reconstruire la ligne avec plus de points à chaque frame
            if (cordeMesh) scene.remove(cordeMesh);
            const visiblePoints = cordeCurve.getPoints(Math.floor(progress * N));
            const geo = new THREE.BufferGeometry().setFromPoints(visiblePoints);
            cordeMesh = new THREE.Line(geo, cordeMatLine);
            scene.add(cordeMesh);

            if (progress >= 1) phase = 'pause';
        }

        else if (phase === 'pause') {
            pauseTimer++;
            if (pauseTimer > 80) phase = 'segment';
        }

        else if (phase === 'segment') {
            segProgress = Math.min(1, segProgress + 0.012);

            // Segment droit de A à B
            if (segmentMesh) scene.remove(segmentMesh);
            const A = new THREE.Vector3(-3, 1.5, 0);
            const B = new THREE.Vector3(-3 + segProgress * 6, 1.5, 0);
            const geo = new THREE.BufferGeometry().setFromPoints([A, B]);
            const mat = new THREE.LineBasicMaterial({ color: 0xf5e441, linewidth: 4 });
            segmentMesh = new THREE.Line(geo, mat);
            scene.add(segmentMesh);

            if (segProgress >= 1) {
                makeLabel('corde AB', 0, 2.2, 0);
                phase = 'done';
            }
        }

        else if (phase === 'done') {
            // Rotation douce de la caméra pour montrer la 3D
            camera.position.x = Math.sin(Date.now() * 0.0003) * 2;
            camera.lookAt(0, 0, 0);

            // Appeler onDone après un délai
            if (!sceneCordeSaut._doneCalled) {
                sceneCordeSaut._doneCalled = true;
                setTimeout(() => {
                    disposeThree();
                    if (onDone) onDone();
                }, 3000);
            }
        }

        renderer.render(scene, camera);
    }

    sceneCordeSaut._doneCalled = false;
    animate();
}