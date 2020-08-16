
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var img;


function preload() {
img = loadImage("stone.png");
  
}


function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(380,265,200,20);
	ground2 = new Ground(150,430,200,20);
	ground3 = new Ground(130,265,200,20);
	ground4 = new Ground(530,665,1065,20);
	
	box1 = new Box(330,235,30,40);
	box2 = new Box(360,235,30,40);
	box5 = new Box(390,235,30,40);
	box3 = new Box(420,235,30,40);
	box4 = new Box(450,235,30,40);
	box5 = new Box(360,195,30,40);
	box6 = new Box(390,195,30,40);
	box7 = new Box(420,195,30,40);
	
	box8 = new Box(90,235,30,40);
	box9 = new Box(120,235,30,40);
	box10= new Box(150,235,30,40);
	box11= new Box(170,235,30,40);
	box12= new Box(200,235,30,40);

	box13 = new Box(120,195,30,40);
	box14 = new Box(150,195,30,40);
	box15= new Box(170,195,30,40);
	box16 = new Box(320,195,30,40);

	box17 = new Box(130,400,30,40);
	box18 = new Box(160,400,30,40);
	box19= new Box(190,400,30,40);
	box20 = new Box(220,400,30,40);

	box21 = new Box(120,360,30,40);
	box22= new Box(150,360,30,40);
	box23= new Box(170,360,30,40);
	box24= new Box(210,360,30,40);
	
	


	polygon=Bodies.circle(50,1,20);
	World.add(world,polygon);

	slingshot = new SlingShot(this.polygon,{x:20, y:200});

	Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
 


  imageMode(CENTER);
	image(img,polygon.position.x,polygon.position.y,40,40);

 

  slingshot.display(); 
 

  drawSprites();
 
}

function mouseReleased(){
	slingshot.fly();
	
  }
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
    
}
function keyPressed(){
	if(keyCode===32){
		slingshot.attach(this.polygon);
		
	}
}
