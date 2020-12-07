
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//var paperimg;
function preload()
{
	//paperimg = loadImage("sprites/paperimage.png");
	//	paperimg=loadimage("paperimage.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  ball= new Paper(50,550);
//this.loadImage("paperimg");
 // ball.loadimage("paperimg");
  ground= new Ground(400,680,800,20);
 
  box1 = new Part(600,575,200,200);	
}


function draw() {
 
  background(255);
  
  drawSprites();
 ball.display();
 ground.display();
 box1.display();
 

}
function keyPressed(){
if(keyCode === RIGHT_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:200,y:-250})
}
if(keyCode === LEFT_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:-200,y:-250})
}

}
