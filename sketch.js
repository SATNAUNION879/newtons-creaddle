const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Bob
	bob1 = new Bob(360,500,20);
	bob2 = new Bob(380,500,20);
	bob3 = new Bob(400,500,20);
	bob4 = new Bob(420,500,20);
	bob5 = new Bob(440,500,20);

	//Roof
	roof = new Roof(400,300,200,20);

	//Ropes
	rope1 = new Rope(bob1.body,roof.body,-80,0);
	rope2 = new Rope(bob2.body,roof.body,-40,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,40,0);
	rope5 = new Rope(bob5.body,roof.body,80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  //display bobs
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  //display roof
  roof.display();

  //display ropes
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:-20})
	}
}
function mouseDragged()   {
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
  }