const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

//realpoints
let A = new Point(100,100,10,"red","A");
let B = new Point(400,100,10,"green","B");
let C = new Point(200,200,10,"blue","C");

//bisector point
let S_A = new Point(100,100,5,"black","S");
let S_B = new Point(100,100,5,"black","S");
let S_C = new Point(100,100,5,"black","S");

//vectors for each of the R_Points, first letter is the origin point
let ab = new Vector2(1,1);
let ac = new Vector2(1,1);
let bc = new Vector2(1,1);
let ba = new Vector2(1,1);
let ca = new Vector2(1,1);
let cb = new Vector2(1,1);

//lines to Realpoins
let Lac = new Line(0,0,"black");
let Lab = new Line(0,0,"black");
let Lbc = new Line(0,0,"black");

//lines to bisector point
let as = new Line();
let bs = new Line();
let cs = new Line();

//Bisector vectors
let A_biSector = new Vector2(1,1);
let B_biSector = new Vector2(1,1);
let C_biSector = new Vector2(1,1);
let A_Bi = new Vector2(1,1);
let B_Bi = new Vector2(1,1);
let C_Bi = new Vector2(1,1);

//used to calc the Bisector vectors
let diff_bc = new Vector2(1,1);
let diff_ab = new Vector2(1,1);
let diff_ac = new Vector2(1,1);

//midpoint!
let X = new Cut("white");

//perpendicular at midpoint to ab
let PabX = new Perpendicular(X.x,X.y);

//Intersection of the perpendicular line and the R_Point-line
let IntersectPerp = new Cut("black");

A.drag();
B.drag();
C.drag();

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,800,450);

  drawTriangleLines();

  calculateBiSector();

  drawBiSectors();

  calcBiSectorPoints();

  drawR_PointLines();

  drawMidPointLines();

  drawPerpLine();

  drawInCenter();

  drawPerpIntersectPoint();

  //calculate the distance of the incenter to the edge and draw the circle
  let radius = Math.sqrt(Math.pow(IntersectPerp.x - X.x,2) + Math.pow(IntersectPerp.y - X.y,2));
  drawCircle(X, radius);

  //draw the R_Points
  A.draw();
  B.draw();
  C.draw();
}

animate();

function drawTriangleLines(){
  //lines from A
  ab.dx = B.x - A.x;
  ab.dy = B.y - A.y;
  ab.r = 200;
  ab.draw(context,A.x,A.y,1);
  ac.dx = C.x - A.x;
  ac.dy = C.y - A.y;
  ac.r = 200;
  ac.draw(context,A.x,A.y,1);

  //lines from B
  ba.dx = A.x - B.x;
  ba.dy = A.y - B.y;
  ba.r = 200;
  ba.draw(context,B.x,B.y,1);
  bc.dx = C.x - B.x;
  bc.dy = C.y - B.y;
  bc.r = 200;
  bc.draw(context,B.x,B.y,1);

  //lines from C
  ca.dx = A.x - C.x;
  ca.dy = A.y - C.y;
  ca.r = 200;
  ca.draw(context,C.x,C.y,1);
  cb.dx = B.x - C.x;
  cb.dy = B.y - C.y;
  cb.r = 200;
  cb.draw(context,C.x,C.y,1);
}

function calculateBiSector(){
  //calc the difference between the vectors, to later calc the bisector
  diff_bc.diffVector(ab,ac);
  diff_ac.diffVector(ab,cb);
  diff_ab.diffVector(cb,ca);

  //calc the bisector
  A_biSector.calcBiSector(diff_bc);
  B_biSector.calcBiSector(diff_ac);
  C_biSector.calcBiSector(diff_ab);
}

function drawBiSectors(){
  //draws the bisectors
  A_Bi.dx = ab.dx - A_biSector.dx;
  A_Bi.dy = ab.dy - A_biSector.dy;
  A_Bi.draw(context,A.x,A.y,1);

  B_Bi.dx = bc.dx - B_biSector.dx;
  B_Bi.dy = bc.dy - B_biSector.dy;
  B_Bi.draw(context,B.x,B.y,1);

  C_Bi.dx = cb.dx - C_biSector.dx;
  C_Bi.dy = cb.dy - C_biSector.dy;
  C_Bi.draw(context,C.x,C.y,1);
}

function calcBiSectorPoints(){
  //calc points where the bisector vectors each end, to later draw a line through it
  S_A.vectorPosition(A_Bi);
  S_A.x += A.x;
  S_A.y += A.y;

  S_B.vectorPosition(B_Bi);
  S_B.x += B.x;
  S_B.y += B.y;

  S_C.vectorPosition(C_Bi);
  S_C.x += C.x;
  S_C.y += C.y;
}

function drawR_PointLines(){
  //define and draw the realpoint lines
  Lac.letTwoPointDefineLine(A,C);
  Lab.letTwoPointDefineLine(A,B);
  Lbc.letTwoPointDefineLine(B,C);
  Lac.draw(0,800);
  Lab.draw(0,800);
  Lbc.draw(0,800);
}

function drawMidPointLines(){
  //define and draw the midpoint lines
  as.letTwoPointDefineLine(A,S_A);
  bs.letTwoPointDefineLine(B,S_B);
  cs.letTwoPointDefineLine(C,S_C);
  as.draw(0,800);
  bs.draw(0,800);
  cs.draw(0,800);
}

function drawInCenter(){
  //define the Incenter
  X.calcPos(as.yIntercept,bs.yIntercept,as.slope,bs.slope);
  X.draw();
}

function drawPerpLine(){
  PabX.calcSlope(C,A,X);
  PabX.draw(0,800,X.x,X.y);
}

function drawCircle(P, radius){
  context.beginPath();
  context.fillWidth = 5;
  context.arc(P.x,P.y,radius,0, Math.PI*2);
  context.stroke();
  context.closePath();
}

function drawPerpIntersectPoint(){
  IntersectPerp.calcPos(PabX.yIntercept, Lac.yIntercept,PabX.slope, Lac.slope);
  IntersectPerp.draw();
}
