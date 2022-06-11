class Hero
{

constructor(x,y,w,h)
{
    let options = {
        density:10,
        frictionAir:0.1

};


this.image=loadImage("Superhero-01.png");
this.body = Bodies.rectangle(x, y, w, h, options);
this.w = w;
this.h = h;
World.add(world, this.body);

}

show() {
    let pos = this.body.position;
    push();
    translate(pos.x,pos.y)
    imageMode(CENTER);
    noStroke();
    image(this.image,0,0, this.w, this.h);
    pop();
  }



}
