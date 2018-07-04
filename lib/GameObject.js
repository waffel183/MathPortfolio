class GameObject{
  constructor(point, pos, vel, acc){
    this.point = point;
    this.pos = pos;
    this.vel = vel;
    this.acc = acc;
  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.point.x = this.pos.dx;
    this.point.y = this.pos.dy;
  }

  draw(context){
    this.point.draw();
  }
}
