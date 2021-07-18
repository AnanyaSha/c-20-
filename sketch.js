

var engine, world , backgroundImg;
var bgImg
var tom , tomImg ;
var jerry , jerryImg

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    tomImg = loadImage("images/cat1.png");
    jerryImg = loadImage("images/mouse1.png");
    tomImg = loadImage("images/cat2.png","images/cat3.png");
    tomImg = loadImage("images/cat4.png");
    jerryImg = loadImage("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    rectMode(CENTER);
    //create tom and jerry sprites here
    tom=createSprite(870,600);
    tom.addAnimation(tomImg)
    tom.scale=0.2

    jerrry=createSprite(870,600);
    jerry.addAnimation(jerryImg)
    jerry.scale=0.15;

    ground = new Ground(600,height,1200,20);
}

function draw() {

  background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width) /2){

    }
      ground.display();
      tom.display();

      
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if(keyCode === RIGHT_ARROW){
   jerry.addImage("mouseTeasing");
   jerry.changeAnimation("mouseTeasing");
   jerry.frameDelay = 25 ;
}

if(KeyCode === LEFT_ARROW){

}
}
