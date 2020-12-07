class Paper{
constructor(x,y){
    var options ={
     
      'restitution':0.7,
      'friction':0.5,
      'density': 2
    }
    this.body=Bodies.rectangle(x,y,50,50,options);
    this.width=30;
    this.height=30;
    this.image = loadImage("sprites/paper.png")
World.add(world,this.body)

}


display() {
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill("white");
    image(this.image,0,0, this.width, this.height);
    pop();
}

}