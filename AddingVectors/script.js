const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let A = new Point(100,100,10,"red","A");
let B = new Point(400,100,10,"green","B");
let C = new Point(200,200,10,"blue","C");

let ab = new Vector2(1,1);
let ac = new Vector2(1,1);

let sum_ab = new Vector2(1,1);

A.drag();
B.drag();
C.drag();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,800,450);

  ab.dx = B.x - A.x;
  ab.dy = B.y - A.y;
  ab.draw(context,A.x,A.y,1);

  ac.dx = C.x - A.x;
  ac.dy = C.y - A.y;
  ac.draw(context,A.x,A.y,1)

  sum_ab.sumVector(ab,ac);
  sum_ab.draw(context,A.x,A.y,1);

  A.draw();
  B.draw();
  C.draw();
}
animate();
