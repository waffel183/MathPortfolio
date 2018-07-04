const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let positive_X_Box = document.getElementById('positive_X');
let negative_X_Box = document.getElementById('negative_X');
let positive_Y_Box = document.getElementById('positive_Y');
let negative_Y_Box = document.getElementById('negative_Y');

// document.getElementById("drawPlane").onClick() = drawPlane();
//pos_x_length, pos_y_length, neg_x_length, neg_y_length

function drawPlane(){
  context.clearRect(0,0,500,500);

  positive_X = parseFloat(positive_X_Box.value);
  negative_X = parseFloat(negative_X_Box.value);
  positive_Y = parseFloat(positive_Y_Box.value);
  negative_Y = parseFloat(negative_Y_Box.value);

  let Plane = new C_Plane(positive_X,positive_Y,negative_X,negative_Y);
  Plane.draw();
}
