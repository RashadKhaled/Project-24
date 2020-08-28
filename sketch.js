
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin,ground,paper;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bin=new Bin(378,551,20,100);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX+","+mouseY,mouseX,mouseY);
  bin.display();
  drawSprites();
 
}



