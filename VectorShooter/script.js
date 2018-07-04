const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let position = new Vector2(100,200);
let velocity = new Vector2(1,2);

let BulletList = [];

let P = new Point(1,1,20,"red");

addEventListener('keydown',(evt)=>{
  //console.log(evt.keyCode);
  switch(evt.keyCode){
    case 38:
      velocity.r += 0.5;
      break;
    case 40:
      velocity.r -= 0.5;
      break;
    case 37:
      velocity.angle -= 0.1;
      break;
    case 39:
      velocity.angle += 0.1;
      break;
    case 32:
      fireBullet();
      break;
  }
});

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,800,450);

  position.add(velocity);
  P.vectorPosition(position);
  P.draw();
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

  for(let i=0; i<BulletList.length;i++){
    BulletList[i].point.x = BulletList[i].pos.dx;
    BulletList[i].point.y = BulletList[i].pos.dy;
    BulletList[i].pos.add(BulletList[i].vel);

    BulletList[i].point.draw();
  }
}

animate();

function fireBullet(){
  let bullet = {};

  bullet.point = new Point(position.dx,position.dy,5,"black");
  bullet.pos = new Vector2(position.dx,position.dy);
  bullet.vel = new Vector2(velocity.dx,velocity.dy);

  bullet.vel.scalair(1.5);

  BulletList.push(bullet);
}
