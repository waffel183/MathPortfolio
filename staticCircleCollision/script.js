const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let A, B, g, l, m;

function init(){
  A = new Point(225,225,125,"yellow","A");
  B = new Point(575,225,125,"yellow","B");
  g = new GameObject(new Point(1,1,10,"blue","g"),
                     new Vector2(30,30), new Vector2(4,5),
                     new Vector2(0,0));
  l = new Line("cyan");
  m = new Line("cyan");
  g.radA = new Vector2(1,1);
  g.tanA = new Vector2(1,1);
  g.radB = new Vector2(1,1);
  g.tanB = new Vector2(1,1);
}

function clamp(){
  if(g.pos.dx < g.point.r){
    g.vel.dx = Math.abs(g.vel.dx);
  }
  if(g.pos.dx > 800-g.point.r){
    g.vel.dx = -Math.abs(g.vel.dx);
  }
  if(g.pos.dy < g.point.r){
    g.vel.dy = Math.abs(g.vel.dy);
  }
  if(g.pos.dy > 450-g.point.r){
    g.vel.dy = -Math.abs(g.vel.dy);
  }
}

function loop(){
  context.clearRect(0,0,800,450);
  requestAnimationFrame(loop);
  A.draw();
  B.draw();
  g.update();
  clamp();

  l.letTwoPointDefineLine(A,g.point);
  m.letTwoPointDefineLine(B,g.point);
  g.radA.dx = A.x - g.point.x;
  g.radA.dy = A.y - g.point.y;
  g.radB.dx = B.x - g.point.x;
  g.radB.dy = B.y - g.point.y;
  g.tanA.dx = -g.radA.dy;
  g.tanA.dy = g.radA.dx;

  g.tanB.dx = -g.radB.dy;
  g.tanB.dy = g.radB.dx;

  g.radA.r = 1;
  g.tanA.r = 1;
  g.radB.r = 1;
  g.tanB.r = 1;

  g.radA.r = g.radA.dotProduct(g.vel);
  g.tanA.r = g.tanA.dotProduct(g.vel);
  g.radB.r = g.radB.dotProduct(g.vel);
  g.tanB.r = g.tanB.dotProduct(g.vel);

  if(g.point.distance(A) < g.point.r + A.r){
    g.radA.angle += Math.PI;
    g.vel.sumVector(g.radA,g.tanA);
  }
  if(g.point.distance(B) < g.point.r + B.r){
    g.radB.angle += Math.PI;
    g.vel.sumVector(g.radB,g.tanB);
  }

  g.draw();
  l.draw(0,800);
  m.draw(0,800);
  //g.radA.draw(context,g.pos.dx,g.pos.dy,40);
  //g.tanA.draw(context,g.pos.dx,g.pos.dy,40);

  //g.radB.draw(context,g.pos.dx,g.pos.dy,40);
  //g.tanB.draw(context,g.pos.dx,g.pos.dy,40);

  g.vel.draw(context,g.pos.dx,g.pos.dy,20);
}

init();
loop();
