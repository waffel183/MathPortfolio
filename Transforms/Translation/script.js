const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

let x_Transform = document.getElementById('x:transform');
let y_Transform = document.getElementById('y:transform');

let A, B;

function setup(){
  A = new Point(400,225,10,"red","A");
  B = new Point(50,50,10,"blue","A\'");

  A.drag();

  animate();
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,800,450);



  B.x = A.x+parseInt(x_Transform.value);
  B.y = A.y+parseInt(y_Transform.value);

  A.draw();
  B.draw();
}

setup();
