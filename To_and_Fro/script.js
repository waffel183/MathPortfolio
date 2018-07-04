const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const speedBox = document.getElementById("speedBox");

let a = new Vector2(100,100);
let b = new Vector2(700,300);
let p = new Vector2(a.dx,a.dy);
let ab = new Vector2(1,1);

let A = new Point(100,100,10,"yellow", "A");
let B = new Point(700,300,10,"green", "B");
let P = new Point(A.x,A.y,10,"black", "P");

let velocity = new Vector2(1,1);
let speed = 4;
let AtoB = true;

speedBox.addEventListener('keydown', (evt)=>{
  if(evt.keyCode ==13){
    speed = speedBox.value;
  }
})

A.drag();
B.drag();

function animate()
{
  requestAnimationFrame(animate);
  context.clearRect(0,0,800,450);
  a.dx = A.x;
  a.dy = A.y;

  b.dx = B.x;
  b.dy = B.y;
  
  P.vectorPosition(p);

  ab.diffVector(a,b);
  ab.draw(context,B.x,B.y,1);

  if(AtoB){
    velocity.diffVector(b,p);
    if(velocity.r < speed){
      AtoB = false;
    }
  }
  else{
    velocity.diffVector(a,p);
    if(velocity.r < speed){
      AtoB = true;
    }
  }

  velocity.r = speed;
  p.add(velocity);


  A.draw();
  B.draw();
  P.draw();
}
animate();
