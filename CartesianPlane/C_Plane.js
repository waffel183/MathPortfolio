class C_Plane{
  constructor(pos_x_length, pos_y_length, neg_x_length, neg_y_length){
    this.pos_x_length = pos_x_length || 1;
    this.pos_y_length = pos_y_length || 1;
    this.neg_x_length = neg_x_length || 1;
    this.neg_y_length = neg_y_length || 1;
  }

  draw(){
    this.drawMainLines();
    this.drawIntegers();
  }

  drawMainLines(){
    let origin = 0;

    context.beginPath();
    context.strokeStyle = "black";
    context.moveTo(canvas.width/2,canvas.height/2);
    context.font = "10px Arial";
    context.fillText(origin.toString(), canvas.width/2-10, canvas.height/2+10);
    //move to right
    context.lineTo(canvas.width,canvas.height/2);
    context.stroke();

    context.moveTo(canvas.width/2,canvas.height/2);
    //move to down
    context.lineTo(canvas.width/2,canvas.height);
    context.stroke();

    context.moveTo(canvas.width/2,canvas.height/2);
    //move to left
    context.lineTo(0,canvas.height/2);
    context.stroke();

    context.moveTo(canvas.width/2,canvas.height/2);
    //move to up
    context.lineTo(canvas.width/2,0);
    context.stroke();

    context.closePath();
  }

  drawIntegers(){
    context.font = "10px Arial";
    if(this.pos_y_length % 1 == 0){
      this.drawUpIntegers();
    }
    if(this.neg_y_length % 1 == 0){
      this.drawDownIntegers();
    }
    if(this.pos_x_length % 1 == 0){
      this.drawRightIntegers();
    }
    if(this.neg_x_length % 1 == 0){
      this.drawLeftIntegers();
    }
  }

  drawLeftIntegers(){
    let interval = canvas.height/2/this.neg_x_length;

    context.beginPath();
    context.strokeStyle = "black"

    for(let i = 1; i <= this.neg_x_length; i++){
      context.strokeStyle = "#cccccc";
      context.lineWidth = 0.5;
      context.moveTo(canvas.width/2-(interval*i),0);
      context.lineTo(canvas.width/2-(interval*i),canvas.height);
      context.stroke();

      context.moveTo(canvas.width/2-(interval*i),canvas.height/2-5);
      context.lineTo(canvas.width/2-(interval*i),canvas.height/2+5);
      context.stroke();

      context.fillText(-i.toString(), canvas.width/2-(interval*i)-5,canvas.height/2+15);
    }

    context.closePath();
  }
  drawRightIntegers(){
    let interval = canvas.height/2/this.pos_x_length;

    context.beginPath();
    context.strokeStyle = "black"

    for(let i = 1; i <= this.pos_x_length; i++){
      context.strokeStyle = "#cccccc";
      context.lineWidth = 0.5;
      context.moveTo(canvas.width/2+(interval*i),0);
      context.lineTo(canvas.width/2+(interval*i),canvas.height);
      context.stroke();

      context.moveTo(canvas.width/2+(interval*i),canvas.height/2-5);
      context.lineTo(canvas.width/2+(interval*i),canvas.height/2+5);
      context.stroke();
      context.fillText(i.toString(), canvas.width/2+(interval*i)-3,canvas.height/2+15);
    }

    context.closePath();
  }
  drawDownIntegers(){
    let interval = canvas.height/2/this.neg_y_length;

    context.beginPath();
    context.strokeStyle = "black"

    for(let i = 1; i <= this.neg_y_length; i++){
      context.strokeStyle = "#cccccc";
      context.lineWidth = 0.5;
      context.moveTo(0,canvas.height/2+(interval*i));
      context.lineTo(canvas.width,canvas.height/2+(interval*i));
      context.stroke();

      context.moveTo(canvas.width/2-5,canvas.height/2+(interval*i));
      context.lineTo(canvas.width/2+5,canvas.height/2+(interval*i));
      context.stroke();
      context.fillText(-i.toString(), canvas.width/2-15,canvas.height/2+(interval*i)+5);
    }

    context.closePath();
  }
  drawUpIntegers(){
    let interval = canvas.height/2/this.pos_y_length;

    context.beginPath();
    context.strokeStyle = "black"

    for(let i = 1; i <= this.pos_y_length; i++){
      context.strokeStyle = "#cccccc";
      context.lineWidth = 0.5;
      context.moveTo(0,canvas.height/2-(interval*i));
      context.lineTo(canvas.width,canvas.height/2-(interval*i));
      context.stroke();

      context.moveTo(canvas.width/2-5,canvas.height/2-(interval*i));
      context.lineTo(canvas.width/2+5,canvas.height/2-(interval*i));
      context.stroke();
      context.fillText(i.toString(), canvas.width/2-15,canvas.height/2-(interval*i)+5);
    }

    context.closePath();
  }
}
