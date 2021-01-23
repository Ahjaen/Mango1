
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy

function preload()
{
	boyImage = loadImage("sprites/boy.png")
	treeImage = loadImage("sprites/tree.png")
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(200,630)
	boy.addImage (boyImage)
	boy.scale=0.08

	ground = new Ground(600,height,1200,10)

	mango1 = new Mango(900,300,25)
	mango2 = new Mango(700,350,20)
	mango3 = new Mango(800,200,20)
	mango4 = new Mango(650,300,27)
	mango5 = new Mango(1000,300,25)
	mango6 = new Mango(750,300,30)
	mango7 = new Mango(870,120,30)
	mango8 = new Mango(920,200,40)

	stone = new Stone(160, 590, 30)

	sling = new Sling(stone.body,{x:160, y:580});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200,200,200);
  
  image(treeImage,600,50,500,700)
    drawSprites();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();

	stone.display();
	sling.display();
	ground.display();

	detectCollision(mango1, stone)
	detectCollision(mango2, stone)
	detectCollision(mango3, stone)
	detectCollision(mango4, stone)
	detectCollision(mango5, stone)
	detectCollision(mango6, stone)
	detectCollision(mango7, stone)
	detectCollision(mango8, stone)


}


function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
	sling.fly();
}

function detectCollision(mango12, stone1){
	mangoBodyPosition=mango12.body.position
	stoneBodyPosition=stone1.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

	if (distance <= mango12.r+stone1.r){
		Matter.Body.setStatic(mango12.body,false);
	}
}
