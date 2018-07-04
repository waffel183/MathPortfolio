const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let A = new Point(100,100,10,"red","A");
let B = new Point(400,100,10,"green","B");
let C = new Point(200,200,10,"blue","C");

let ab = new Vector2(1,1);
let ac = new Vector2(1,1);

//line to bisector
let l = new Line();

let biSector = new Vector2(1,1);
let Bi = new Vector2(1,1);

let diff_bc = new Vector2(1,1);

A.drag();
B.drag();
C.drag();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,800,450);

  ab.dx = B.x - A.x;
  ab.dy = B.y - A.y;
  ab.r = 200;
  ab.draw(context,A.x,A.y,1);

  ac.dx = C.x - A.x;
  ac.dy = C.y - A.y;
  ac.r = 200;
  ac.draw(context,A.x,A.y,1)

  diff_bc.diffVector(ab,ac);

  biSector.calcBiSector(diff_bc);
  //biSector.draw(context,C.x,C.y,1);

  Bi.dx = ab.dx - biSector.dx;
  Bi.dy = ab.dy - biSector.dy;
  Bi.r = 100;
  Bi.draw(context,A.x,A.y,1);


  A.draw();
  B.draw();
  C.draw();
}
animate();
