const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let g,h,l;

function setup(){
  g = new GameObject(new Point(1,1,30,"yellow"),
                    new Vector2(100,100),new Vector2(1,2),
                    new Vector2(0,0));
  h = new GameObject(new Point(1,1,150,"blue"),
                    new Vector2(400,200),new Vector2(-2,3),
                    new Vector2(0,0));
  l = new Line();

  g.rad = new Vector2(1,1);
  h.rad = new Vector2(1,1);
  g.tan = new Vector2(1,-1);
  h.tan = new Vector2(1,-1);

  g.m = g.point.r*g.point.r;
  h.m = h.point.r*h.point.r;


  animate();
}

function animate(){
  context.clearRect(0,0,800,450);
  requestAnimationFrame(animate);
  l.letTwoPointDefineLine(g.point,h.point);
  g.update();
  h.update();

  clamp(g),clamp(h);
  g.rad.diffVector(h.pos,g.pos);
  g.rad.r = 1;
  g.rad.r = g.rad.dotProduct(g.vel);

  g.tan.dx = g.rad.dy;
  g.tan.dy = -g.rad.dx;
  g.tan.r = 1;
  g.tan.r = g.tan.dotProduct(g.vel);

  h.rad.diffVector(g.pos,h.pos);
  h.rad.r = 1;
  h.rad.r = h.rad.dotProduct(h.vel);

  h.tan.dx = h.rad.dy;
  h.tan.dy = -h.rad.dx;
  h.tan.r = 1;
  h.tan.r = h.tan.dotProduct(h.vel);

  if(g.point.distance(h.point) < g.point.r + h.point.r){
    let va = new Vector2(g.rad.dx,g.rad.dy);
    let vb = new Vector2(h.rad.dx,h.rad.dy);
    let vc = new Vector2(g.rad.dx,g.rad.dy);
    let vd = new Vector2(h.rad.dx,h.rad.dy);

    let ma = (g.m-h.m)/(g.m+h.m);
    let mb = 2*h.m/(g.m+h.m);
    let mc = 2*g.m/(g.m+h.m);
    let md = (h.m-g.m)/(g.m+h.m);

    va.scalair(ma);
    vb.scalair(mb);
    vc.scalair(mc);
    vd.scalair(md);

    g.rad.sumVector(va,vb);
    h.rad.sumVector(vc,vd);

    g.vel.sumVector(g.rad,g.tan);
    h.vel.sumVector(h.rad,h.tan);
  }

  h.draw(context);
  g.draw(context);
/*
  h.vel.draw(context,h.pos.dx,h.pos.dy,50);
  g.vel.draw(context,g.pos.dx,g.pos.dy,50);

  g.rad.draw(context,g.pos.dx,g.pos.dy,50);
  h.rad.draw(context,h.pos.dx,h.pos.dy,50);

  g.vel.draw(context,g.pos.dx,g.pos.dy,50);
  h.vel.draw(context,h.pos.dx,h.pos.dy,50);
  g.tan.draw(context,g.pos.dx,g.pos.dy,50);
  h.tan.draw(context,h.pos.dx,h.pos.dy,50);
*/
  //l.draw(0,800);
}

function clamp(g){
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

setup();
