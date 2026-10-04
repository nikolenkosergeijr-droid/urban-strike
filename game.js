const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set(0, 2, 5);

const light = new THREE.HemisphereLight(0xffffff, 0x444444, 3);
scene.add(light);

const ground = new THREE.Mesh(
    new THREE.BoxGeometry(50, 1, 50),
    new THREE.MeshStandardMaterial({ color: 0x555555 })
);

ground.position.y = -1;
scene.add(ground);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
