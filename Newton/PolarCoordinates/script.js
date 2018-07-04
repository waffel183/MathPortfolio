const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let sun,mercury,venus,moon,earth,mars;

function setup(){
  sun = new GameObject(
                      new Point(0,0,50,"yellow"),
  /*pos*/             new Vector2(canvas.width/2,canvas.height/2),
  /*vel*/             new Vector2(0,0),
  /*acc*/             new Vector2(0,0));


  mercury = new GameObject(
                      new Point(0,0,5,"grey"),
  /*pos*/             new Vector2(canvas.width/2,canvas.height/2),
  /*vel*/             new Vector2(0,0),
  /*acc*/             new Vector2(0,0));

  mercury.pos_rel = new Vector2(100,0);
  mercury.dAngle = 0.03;

  venus = new GameObject(
                      new Point(0,0,10,"brown"),
  /*pos*/             new Vector2(canvas.width/2,canvas.height/2),
  /*vel*/             new Vector2(0,0),
  /*acc*/             new Vector2(0,0));

  venus.pos_rel = new Vector2(225,0);
  venus.dAngle = 0.02;

  earth = new GameObject(
                      new Point(0,0,15,"blue"),
  /*pos*/             new Vector2(canvas.width/2,canvas.height/2),
  /*vel*/             new Vector2(0,0),
  /*acc*/             new Vector2(0,0));

  earth.pos_rel = new Vector2(275,0);
  earth.dAngle = 0.005;

  mars = new GameObject(
                      new Point(0,0,20,"red"),
  /*pos*/             new Vector2(canvas.width/2,canvas.height/2),
  /*vel*/             new Vector2(0,0),
  /*acc*/             new Vector2(0,0));

  mars.pos_rel = new Vector2(350,0);
  mars.dAngle = 0.01;

  moon = new GameObject(
                      new Point(0,0,5,"grey"),
  /*pos*/             new Vector2(canvas.width/2,canvas.height/2),
  /*vel*/             new Vector2(0,0),
  /*acc*/             new Vector2(0,0));

  moon.pos_rel = new Vector2(50,0);
  moon.dAngle = 0.1;

  animationLoop();
}

function makePlanetOrbit(parent, child){
  child.pos_rel.angle += child.dAngle;
  child.pos.sumVector(parent.pos,child.pos_rel);
  child.update();
  child.draw(context);
}

function animationLoop(){
  //context.clearRect(0,0,canvas.width,canvas.height);
  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animationLoop);

  sun.update();
  sun.draw(context);


  makePlanetOrbit(sun, mercury);
  makePlanetOrbit(sun, venus);
  makePlanetOrbit(sun, earth);
  makePlanetOrbit(earth, moon);
  makePlanetOrbit(sun, mars);

}

setup();
