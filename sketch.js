const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;
var holder,polygon,ground;
var stand1,stand2;
var Slingshot;
var bg = "images/light.jpg";
var  backgroundImg ;


function  preload () { 
  getBackgroundImg();

  polygon_img=loadImage("images/polygon.png");
 backgroundImg=loadImage("images/light.jpg")
}


function setup() {


  createCanvas(1000,700);
 engine=Engine.create();
 world=engine.world;
 Engine.run(engine);
 ground=new Ground();
 stand1=new Stand(390,300,250,10);
 stand2=new Stand(700,200,200,10);
 //blocks
 block1=new Block (300,275,30,40);
 block2=new Block(330,275,30,40);
 block3=new Block(360,275,30,40);
 block4=new Block(390,275,30,40);
 block5=new Block(420,275,30,40);
 block6=new Block(450,275,30,40);
 block7=new Block(480,275,30,40);
 //level2 
 block8=new Block (330,235,30,40);
 block9=new Block(360,235,30,40);
 block10=new Block(390,235,30,40);
 block11=new Block(420,235,30,40);
 block12=new Block(450,235,30,40);
 //level3
 block13=new Block(360,195,30,40);
 block14=new Block(390,195,30,40);
 block15=new Block(420,195,30,40);
 //lvl 4
 block16=new Block(390,155,30,40);
 //ckind ctnd lvl 1
 secondblock1=new Block(640,175,30,40);
 secondblock2=new Block(670,175,30,40);
 secondblock3=new Block(700,175,30,40);
 secondblock4=new Block(730,175,30,40);
 secondblock5=new Block(760,175,30,40);
 //ckind ctnd lvl 2
 secondblock6=new Block(670,135,30,40);
 secondblock7=new Block(700,135,30,40);
 secondblock8=new Block(730,135,30,40);
 //ckind ctnd lvl 3
 secondblock9=new Block(700,95,30,40);
 //
 polygon = Bodies.circle (50,200,20);
World.add(world,polygon);
Slingshot=new SlingShot(this.polygon,{x:100,y:200});
 
}

function draw() {
  if (backgroundImg)
  background(backgroundImg);  
  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight (2);
  stroke (15);
  fill("aqua");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  //levl2 
fill("purple");
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
//level 3'
fill("darkBlue");
block13.display();
block14.display();
block15.display();
//lvl 4
fill ("gold");
block16.display();
//ckind ctnd lvl 1
fill("blue");
secondblock1.display();
secondblock2.display();
secondblock3.display();
secondblock4.display();
secondblock5.display();
// ckind ctnd lvl 2
fill("red");
secondblock6.display();   
secondblock7.display();
secondblock8.display(); 
//ckind ctnd lvl 3 
fill("green");
secondblock9.display();
imageMode(CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,40,40);
Slingshot.display();
}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  Slingshot.fly();
 // gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
   //   bird.trajectory=[];
     // Matter.Body.setPosition(bird.body,{x:200,y:50});
     Slingshot.attach(this.polygon);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "images/dark.jpg";
  }
  else{
      bg = "images/light.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}