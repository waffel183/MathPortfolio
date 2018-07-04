const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const scalVal = document.getElementById("scalVal");

let A = new Point(100,100,10,"red","A");
let B = new Point(400,100,10,"green","B");
let C = new Point(200,200,10,"blue","C");
let D = new Point(500,300,10,"black","D");

let ab = new Vector2(1,1);
let ac = new Vector2(1,1);

let scal = new Vector2(1,1);

A.drag();
B.drag();
C.drag();
D.drag();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,800,450);

  ab.dx = B.x - A.x;
  ab.dy = B.y - A.y;
  ab.draw(context,A.x,A.y,1);

  ac.dx = C.x - A.x;
  ac.dy = C.y - A.y;
  ac.draw(context,A.x,A.y,1)

  scal.dx = D.x - A.x;
  scal.dy = D.y - A.y;
  scal.scalair(scalVal.value);
  scal.draw(context,A.x,A.y,1);

  A.draw();
  B.draw();
  C.draw();
  D.draw();
}
animate();
