const Engine=Matter.Engine;
const Body=Matter.Body;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint = Matter.Constraint;

var myEngine
var ground
var myWorld
var tree
var boy
var boyImg
var stone
var mango1,mango2,mango3,mango4,mango5;
var sling


function preload(){
	boyImg=loadImage("boy.png")
}




function setup() {

  createCanvas(800,400);
myEngine=Engine.create();
myWorld=myEngine.world;

ground= new Ground(400,380,800,20)
stone = new Stone(150,300,15);
sling = new Sling (stone.body,{x:150,y:280})
tree = new Tree(640,185,20,300);
mango1 = new Mango(500,130,15);

	mango2 = new Mango(600,110,15);
	
	mango3 = new Mango(550,120,15);
	mango4 = new Mango(630,150,15);
	mango5 = new Mango(700,130,15);
	mango6= new Mango(670,80,15)
	mango7=new Mango(620,60,15)
	

}





function draw() {
  background("white");  

  Engine.update(myEngine);
  image(boyImg, 120, 220,200, 200)

   
   ground.display();
   tree.display();
   mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  sling.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  
   
	drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    sling.fly();
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:280})
		sling.attach(stone.body);
	}
}
