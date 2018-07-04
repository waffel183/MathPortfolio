const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let A = new Point(300,100,10,"red","A");
let B = new Point(100,100,10,"green","B");
let C = new Point(300,300,10,"blue","C");

let l = new Line(0,0,'blue');
let m = new Perpendicular(A.x,A.y);

let v = new Vector2(0,0,'red');

let par = new Vector2(1,1);
let nor = new Vector2(1,1);

A.drag();
B.drag();
C.drag();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,800,450);

  l.letTwoPointDefineLine(A,B);
  l.draw(0,800);
  m.calcSlope(A,B,A);
  m.draw(0,800,A.x,A.y);

  v.dx = C.x - A.x;
  v.dy = C.y - A.y;
  v.draw(context,A.x,A.y,1);

  par.dx = 1;
  par.dy = l.slope;
  par.r = 1;

  nor.dx = -par.dy;
  nor.dy = par.dx;
  nor.r = 1;

  par.r = par.dotProduct(v);
  nor.r = nor.dotProduct(v);

  par.draw(context,A.x,A.y,1);
  nor.draw(context,A.x,A.y,1);

  A.draw();
  B.draw();
  C.draw();
}
animate();
