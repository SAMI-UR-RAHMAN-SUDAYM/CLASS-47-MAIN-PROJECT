class Boxes
{
  constructor(x, y, w,h) 
  {
    let options = {
    restitution:0.4,
    friction:1,
    density:18

    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    rectMode(CENTER);
    noStroke();
    fill("silver");
    rect(pos.x,pos.y, this.w, this.h);
    pop();
  }
}