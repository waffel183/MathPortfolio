const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let moon, earth;

function setup(){
  moon = new GameObject(new Point(0,0,10,"grey"),
                        new Vector2(600,500), new Vector2(1,-2),
                        new Vector2(0,0));
  earth = new GameObject(new Point(0,0,70,"blue","earth"),
                         new Vector2(canvas.width/2,canvas.height/2),
                         new Vector2(0,0),
                         new Vector2(0,0));
  animationLoop();
}

function frame(){
  moon.acc.diffVector(earth.pos,moon.pos);
  let r = moon.acc.r;
  moon.acc.r = 10000/(r*r);


  moon.update();
  earth.update();
  earth.draw(context);
  moon.draw(context);
}

function animationLoop(){
  //context.clearRect(0,0,canvas.width,canvas.height);
  context.fillStyle = "rgba(0,0,0,0.05)";
  context.fillRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animationLoop);

  frame();

}

setup();
