let width = window.innerWidth;
let height = window.innerHeight;

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );

camera.position.z = 5;
let renderer = new THREE.WebGLRenderer();
renderer.setSize( width, height );
document.body.appendChild( renderer.domElement );

let cubeGeometry = new THREE.BoxGeometry(1,1,1);
let cubeTexture = new THREE.TextureLoader().load('textures/bricks.jpg');
let cubeMaterial = new THREE.MeshBasicMaterial({color:0xff0000, map:cubeTexture});
let Cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(Cube);

//add edges to cube
let CubeEdges = new THREE.EdgesGeometry(cubeGeometry);
CubeEdgeline = new THREE.LineSegments(CubeEdges, new THREE.LineBasicMaterial({color:0xffffff}));
scene.add(CubeEdgeline);

//add wireframe to cube
let CubeWireframe = new THREE.WireframeGeometry(cubeGeometry);
CubeWFline = new THREE.LineSegments(CubeWireframe);
CubeWFline.material.depthTest = false;
CubeWFline.material.opacity = 0.25;
CubeWFline.material.transparent = true;
scene.add(CubeWFline);



let DodeGeometry = new THREE.DodecahedronGeometry();
let DodeTexture = new THREE.TextureLoader().load('textures/bricks.jpg');
let DodeMaterial = new THREE.MeshBasicMaterial({color:0x00ff00, map:DodeTexture});
let Dodecahedron = new THREE.Mesh(DodeGeometry,DodeMaterial);
scene.add(Dodecahedron);

//add edges to Dodecahedron
let DodeEdges = new THREE.EdgesGeometry(DodeGeometry);
DodeEdgeline = new THREE.LineSegments(DodeEdges, new THREE.LineBasicMaterial({color:0xffffff}));
scene.add(DodeEdgeline);

//add wireframe to cube
let DodeWireframe = new THREE.WireframeGeometry(DodeGeometry);
DodeWFline = new THREE.LineSegments(DodeWireframe);
DodeWFline.material.depthTest = false;
DodeWFline.material.opacity = 0.25;
DodeWFline.material.transparent = true;
scene.add(DodeWFline);

Dodecahedron.position.set(2,0,0);
DodeWFline.position.set(2,0,0);
DodeEdgeline.position.set(2,0,0);

window.addEventListener('keydown',(evt)=>{
  let direction = camera.getWorldDirection().multiplyScalar(0.1);
  switch (evt.code) {
    case "ArrowUp":
      camera.position.add(direction);
      break;
    case "ArrowDown":
      camera.position.sub(direction);
      break;
    case "ArrowLeft":
      camera.rotation.y+=0.1;
      break;
    case "ArrowRight":
      camera.rotation.y-=0.1;
      break;
    default:

  }
})

function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene,camera);

  rotateGeometry(Cube,0.01,0.005);
  rotateGeometry(CubeWFline,0.01,0.005);
  rotateGeometry(CubeEdgeline,0.01,0.005);

  rotateGeometry(Dodecahedron,0.05);
  rotateGeometry(DodeWFline,0.05);
  rotateGeometry(DodeEdgeline,0.05);
}
animate();

function rotateGeometry(Geometry, xSpeed, ySpeed){
  if(xSpeed === undefined) xSpeed=0;
  if(ySpeed === undefined) ySpeed=0;

  Geometry.rotation.x += xSpeed;
  Geometry.rotation.y += ySpeed;
}

function addEdges(geometry, line){
  let edges = new THREE.EdgesGeometry(cubeGeometry);
  line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color:0xffffff}));

  scene.add(line);
}
