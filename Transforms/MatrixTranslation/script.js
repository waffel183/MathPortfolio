const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

let xy_Transform1box = document.getElementById('xy:transform1');
let yx_Transform1box = document.getElementById('yx:transform1');
let x_Transform1box = document.getElementById('x:transform1');
let y_Transform1box = document.getElementById('y:transform1');

let xy_Transform2box = document.getElementById('xy:transform2');
let yx_Transform2box = document.getElementById('yx:transform2');
let x_Transform2box = document.getElementById('x:transform2');
let y_Transform2box = document.getElementById('y:transform2');

let xy_Transform1,yx_Transform1,x_Transform1,y_Transform1,xy_Transform2,yx_Transform2,x_Transform2,y_Transform2;

let A, B, C, D;
let a, b, c, d;

function setup(){
  A = new Point(400,225,10,"red","A");
  B = new Point(450,225,10,"red","B");
  C = new Point(400,275,10,"red","C");
  D = new Point(450,275,10,"red","D");

  a = new Point(400,225,10,"red","A'");
  b = new Point(450,225,10,"red","B'");
  c = new Point(400,275,10,"red","C'");
  d = new Point(450,275,10,"red","D'");

  A.drag();
  B.drag();
  C.drag();
  D.drag();

  animate();
}
//add: for every point in the original ABCD an transformed point
function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,800,450);
  getValuesFromBoxes();

  a.x = A.x + (x_Transform1*A.x + xy_Transform1*A.y);
  a.y = A.y + (yx_Transform1*A.x + y_Transform1*A.y);

  b.x = B.x + (x_Transform1*B.x + xy_Transform1*B.y);
  b.y = B.y + (yx_Transform1*B.x + y_Transform1*B.y);

  c.x = C.x + (x_Transform1*C.x + xy_Transform1*C.y);
  c.y = C.y + (yx_Transform1*C.x + y_Transform1*C.y);

  d.x = D.x + (x_Transform1*D.x + xy_Transform1*D.y);
  d.y = D.y + (yx_Transform1*D.x + y_Transform1*D.y);

  A.draw();
  B.draw();
  C.draw();
  D.draw();

  a.draw();
  b.draw();
  c.draw();
  d.draw();
}

setup();

function getValuesFromBoxes(){
  xy_Transform1 = parseFloat(xy_Transform1box.value);
  x_Transform1 = parseFloat(x_Transform1box.value);
  y_Transform1 = parseFloat(y_Transform1box.value);
  yx_Transform1 = parseFloat(yx_Transform1box.value);

  xy_Transform2 = parseFloat(xy_Transform2box.value);
  x_Transform2 = parseFloat(x_Transform2box.value);
  y_Transform2 = parseFloat(y_Transform2box.value);
  yx_Transform2 = parseFloat(yx_Transform2box.value);
}
