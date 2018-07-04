const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

var points = [];
var positions = [];
var velocities = [];

for(let i = 0; i < 10; i++){
  let randX = Math.floor((Math.random()*440)+10);
  let randY = Math.floor((Math.random()*440)+10);
  points[i] = new Point(randX,randY,20,'blue');
  positions[i] = new Vector2(randX,randY);
  velocities[i] = new Vector2(Math.random()*10,Math.random()*10);
}

function animate(){
  context.clearRect(0,0,800,450);
  requestAnimationFrame(animate);
  for(let i = 0; i < 10; i++){
    points[i].y = positions[i].dy;
    points[i].x = positions[i].dx;
    positions[i].add(velocities[i]);

    if(positions[i].dx < 0 || positions[i].dx > 800){
      velocities[i].dx = -velocities[i].dx;
    }
    if(positions[i].dy < 0 || positions[i].dy > 450){
      velocities[i].dy = -velocities[i].dy;
    }
    points[i].draw();
    velocities[i].draw(context,points[i].x, points[i].y,10);
  }
}

animate()
