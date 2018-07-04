const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let A = new Point(300,100,10,"red","A");    //diagonal
let B = new Point(100,100,10,"green","B");  //vertical
let C = new Point(300,300,10,"blue","C");   //horizontal
let D = new Point(100,300,10,"black","D");  //center

let AD = new Vector2(1,1);
let BD = new Vector2(0,1);
let CD = new Vector2(1,0);

A.drag();
B.drag();
C.drag();
D.drag();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,800,450);

  AD.dx = A.x - D.x;
  AD.dy = A.y - D.y;
  AD.draw(context,D.x,D.y,1);

  BD.dotProduct(AD,new Vector2(0,1));
  BD.draw(context,D.x,D.y,1);

  CD.dotProduct(AD,new Vector2(1,0));
  CD.draw(context,D.x,D.y,1);

  A.draw();
  //B.draw();
  //C.draw();
  D.draw();
}
animate();
