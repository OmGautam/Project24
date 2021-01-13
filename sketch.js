
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	hammer = new Hammer(200,200,100,50);
	ground = new Ground(400,700,800,20);
	stone = new Stone(300,100,50,50);
	rubber = new Rubber(200,200,50);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  hammer.display();
  ground.display();
  stone.display();
  rubber.display();

 
}



