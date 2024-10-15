
// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Create a Three.JS Scene
const scene = new THREE.Scene();

// Create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 25); // Set camera position to view the object
camera.lookAt(0, 0, 0); // Ensure the camera looks at the center of the scene

// Keep the 3D object in a global variable
let object;

// Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

// Load the file
loader.load(
  `../dino/scene.gltf`, // Ensure this path is correct
  function (gltf) {
    object = gltf.scene;
    object.position.set(3, 10, -6.6); // Center the object
    object.scale.set(25, 25, 25); // Scale the object as needed
    scene.add(object); // Add the object to the scene
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    console.error(error);
  }
);

// Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);

// Add lights to the scene
const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 1);
scene.add(ambientLight);

// Set up OrbitControls for potential user interaction (optional)
const controls = new OrbitControls(camera, renderer.domElement);
// controls.enablePan = false; // Disable panning
// controls.enableZoom = false; // Allow zoom
// controls.enableRotate = false; // Disable rotating with the mouse

// Render the scene
function animate() {
  requestAnimationFrame(animate);

  // Rotate the object around its own axes continuously
  if (object) {
    // object.rotation.x += 0.01; // Rotate around X-axis
    object.rotation.y += 0.001; // Rotate around Y-axis
    // object.rotation.z += 0.01; // Rotate around Z-axis (if desired)
  }

  renderer.render(scene, camera);
}

// Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the 3D rendering
animate();



