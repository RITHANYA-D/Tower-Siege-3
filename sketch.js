const Engine     = Matter.Engine;
const World      = Matter.World;
const Bodies     = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
var score = 0;
var block1, block2, block3, block4, block5, block6, block7, block8;
var block9, block10, block11, block12, block13, block14, block15, block16;
var blocks1, blocks2, blocks3, blocks4, blocks5, blocks6, blocks7, blocks8, blocks9;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {

  createCanvas(900,400);

  engine = Engine.create();
  world  = engine.world;
  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);

  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);

  //top
  blocks9 = new Block(700,95,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {

  background(56,44,44); 
 
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);

  textSize(15);
  text("Press Space to get a second Chance to Play!!",550 ,350);

  fill("yellow");
  textSize(35);
  stroke("green")
  text("SCORE: ", 750, 40);

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(4);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();

  fill("grey");
  block16.display();

  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();

  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();

  fill("pink")
  blocks9.display();

  block1.getscore();
  block2.getscore();
  block3.getscore();
  block4.getscore();
  block5.getscore();
  block6.getscore();
  block7.getscore();

  fill("pink");
  block8.getscore();
  block9.getscore();
  block10.getscore();
  block11.getscore();
  block12.getscore();

  fill("turquoise");
  block13.getscore();
  block14.getscore();
  block15.getscore();

  fill("grey");
  block16.getscore();

  fill("skyblue");
  blocks1.getscore();
  blocks2.getscore();
  blocks3.getscore();
  blocks4.getscore();
  blocks5.getscore();

  fill("turquoise");
  blocks6.getscore();
  blocks7.getscore();
  blocks8.getscore();

  fill("pink")
  blocks9.getscore();

  bgcolor();

  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}

async function bgcolor(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var dt = responseJSON.datetime;
  var hr = dt.slice(11,13); //2020-12-12T15:16:04.885780+05:30

  if(hr >= 06 && hr <= 18){
     bg = "yellow";
  }
  else {
      bg = "blue";
  }
}