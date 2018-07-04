const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let position = new Vector2(100,200);
let velocity = new Vector2(1,2);
let acc = new Vector2(0.5,0.5);

let r = 20;

let P = new Point(1,1,r,"red");

let Weight = Math.PI*Math.pow(r,2);
let Force = new Vector2(1,1);

addEventListener('keydown',(evt)=>{
  //console.log(evt.keyCode);
  switch(evt.keyCode){
    case 38:
      Weight += 100;
      velocity.r += acc.dx;
      break;
    case 40:
      Weight -= 100;
      velocity.r -= acc.dy;
      break;
    case 37:
      velocity.angle -= 0.1;
      break;
    case 39:
      velocity.angle += 0.1;
      break;
    case 32:
      //addWeight
      break;
  }
});

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,800,450);

  position.add(velocity);
  P.vectorPosition(position);
  r = Math.sqrt(Weight/Math.PI);
  P.draw(canvas,r);
  velocity.draw(context,P.x,P.y,20);

  if(position.dx < 0){
    position.dx = 800;
  }
  if(position.dx > 800){
    position.dx = 0;
  }
  if(position.dy < 0){
    position.dy = 450;
  }
  if(position.dy > 450){
    position.dy = 0;
  }

  Force.dx = Weight*acc.dx;
  Force.dy = Weight*acc.dy;

  acc.dx = (1/Weight)*Force.dx;
  acc.dy = (1/Weight)*Force.dy;
}

animate();
