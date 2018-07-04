const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let A = new Point(100,100,10,"red","A");
let B = new Point(400,300,10,"green","B");

let l = new Line(0,0,'red');

let gameObject = {};
gameObject.pos = new Vector2(500,200);
gameObject.point = new Point(gameObject.dx,gameObject.dy,10,"black");
gameObject.vel = new Vector2(3,4);

gameObject.update = () =>{
  gameObject.pos.add(gameObject.vel);

  if(gameObject.pos.dx < gameObject.point.r || gameObject.pos.dx > 800){
    gameObject.vel.dx = -gameObject.vel.dx;
  }
  if(gameObject.pos.dy < gameObject.point.r || gameObject.pos.dy > 450){
    gameObject.vel.dy = -gameObject.vel.dy;
  }

  gameObject.point.x = gameObject.pos.dx;
  gameObject.point.y = gameObject.pos.dy;
}

let m = new Perpendicular(gameObject.pos.dx,gameObject.pos.dy);

let S = new Cut();

let tan  = new Vector2(1,1);
let rad = new Vector2(1,1);

A.drag();
B.drag();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,800,450);

  gameObject.update();

  if(gameObject.point.distance(S) < gameObject.point.r){
    rad.angle += Math.PI;
    gameObject.vel.sumVector(rad, tan);
  }

  gameObject.point.draw();
  gameObject.vel.draw(context,gameObject.pos.dx,gameObject.pos.dy,20);

  l.letTwoPointDefineLine(A,B);
  l.draw(0,800);

  m.calcSlope(A,B,gameObject.point);
  m.draw(0,800,gameObject.point.x,gameObject.point.y);

  tan.dx = 1;
  tan.dy = l.slope;
  tan.r = 1;

  rad.dx = tan.dy;
  rad.dy = -tan.dx;
  rad.r = 1;

  tan.r = tan.dotProduct(gameObject.vel);
  rad.r = rad.dotProduct(gameObject.vel);

  S.calcPos(l.yIntercept,m.yIntercept,l.slope,m.slope);
  S.draw();

  tan.draw(context,S.x,S.y,20);
  rad.draw(context,S.x,S.y,20);

  A.draw();
  B.draw();
}
animate();
