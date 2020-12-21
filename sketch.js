
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
bob1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof1= new Roof(255,120,470,20)
	bob1 = new Bob(380,450,70)
	bob2 = new Bob(450,450,70)
	bob3 = new Bob(520,450,70)
	bob4 = new Bob(590,450,70)
	bob5 = new Bob(660,450,70)



	rope1 = new Rope(bob1.body,roof1.body)
	rope2 = new Rope(bob2.body,roof1.body)
	rope3 = new Rope(bob3.body,roof1.body)
	rope4 = new Rope(bob4.body,roof1.body)
	rope5 = new Rope(bob5.body,roof1.body)



   


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

roof1.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();


rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  
  
 
 
}



