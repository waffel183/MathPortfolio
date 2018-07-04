const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const speedBox = document.getElementById("speedBox");

let pointVectors = [];
let points = [];
let lines = [];
let linePoints = [];

let p = new Vector2(0,0);
let ab = new Vector2(1,1);

let P = new Point(0,0,10,"black", "P");

let velocity = new Vector2(1,1);
let speed = 4;
let at_a_point = true;

let num_points = 5;

speedBox.addEventListener('keydown', (evt)=>{
  if(evt.keyCode ==13){
    speed = speedBox.value;
  }
})

function initPoints(){
  for (let i = 0; i < num_points; i++){
    let randX = giveRandomNumber(0,800);
    let randY = giveRandomNumber(0,450);
    let p = new Vector2(randX,randY);
    let P = new Point(randX,randY,5,'black','');
    pointVectors.push(p);
    points.push(P);
  }
}

initPoints();

function drawPoints(){
  for (let i = 0; i < num_points;i++){
    points[i].draw();
  }
}

function giveRandomNumber(min,max){
  return Math.floor((Math.random()*max)+min);
}

function makeLines(){
  for (let i = 0; i < num_points;i++){
    let randomPoint1 = giveRandomNumber(0,num_points-1);
    let randomPoint2 = giveRandomNumber(0,num_points-1);

    let line = new Vector2(1,1);
    line.diffVector(pointVectors[randomPoint1],pointVectors[randomPoint2]);
    lines.push(line);
    linePoints.push(randomPoint2);
  }
}

function drawLines(){
  for (let i = 0; i < lines.length;i++){
    lines[i].draw(context,points[linePoints[i]].x,points[linePoints[i].y],1);
  }
}

makeLines();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,800,450);

  P.vectorPosition(p);

  drawLines();

  /*if(at_a_point){
    velocity.diffVector(b,p);
    if(velocity.r < speed){
      at_a_point = false;
    }
  }
  else{
    velocity.diffVector(a,p);
    if(velocity.r < speed){
      at_a_point = true;
    }
  }*/

  velocity.r = speed;
  p.add(velocity);

  P.draw();
  drawPoints();
}
animate();
