let width = window.innerWidth;
let height = window.innerHeight;

let scene, camera, renderer, light;

let sun = {};
let earth = {};

function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, width/height, 1, 1000);
  camera.position.z =20;
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);

  sun.geometry = new THREE.SphereGeometry(2,32,32);
  sun.texture = new THREE.TextureLoader().load('textures/sunmap.jpg');
  sun.material = new THREE.MeshBasicMaterial({color:0xcccc00, map:sun.texture});
  sun.mesh = new THREE.Mesh(sun.geometry, sun.material);

  earth.geometry = new THREE.SphereGeometry(1,32,32);
  earth.texture = new THREE.TextureLoader().load('textures/earthmap1k.jpg');
  earth.material = new THREE.MeshBasicMaterial({map:earth.texture});
  earth.mesh = new THREE.Mesh(earth.geometry, earth.material);
  earth.mesh.position.set(5,0,3);
  earth.phi = 0;
  earth.theta = 0;
  earth.r = 5;

  light = new THREE.PointLight(0xff0000, 1, 100);
  light.position.set(0,0,0);

  scene.add(light);
  scene.add(earth.mesh);
  scene.add(sun.mesh);

  animate();
}

function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  sun.mesh.rotation.y -= 0.01;
  earth.mesh.position.x = earth.r * Math.sin(earth.theta)*Math.cos(earth.phi);
  earth.mesh.position.y = earth.r * Math.sin(earth.theta)*Math.sin(earth.phi);
  earth.mesh.position.z = earth.r * Math.cos(earth.theta);
  earth.theta -= 0.01;

  earth.mesh.rotation.y += 0.02;
}
init();
