var bg , bgImg ;
var soil , soilImg;
var seed , trash1 , trash2 , trash3;
var boy , boyImg ;

function preload(){
  bgImg = loadImage("bg.jpg");
  soilImg = loadImage("soil3.png");
  boyImg = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png");
  boyImg2 = loadImage("boy5.png");
  seed = loadImage("seed.png");
  seed3 = loadImage("seed3.png");
  trash1 = loadImage("trash1.png");
  trash2 = loadImage("trash2.png");
  trash3 = loadImage("trash3.png");
}

function setup(){
  createCanvas(600,600);
  bg = createSprite(300,200);
  bg.addImage(bgImg);
  bg.scale = 1.0;
  
  soil = createSprite(200,400);
  soil.addImage("soil",soilImg);
  soil.scale = 0.4

  boy = createSprite(50,350);
  boy.addAnimation("boy",boyImg);
  boy.addAnimation("boy2",boyImg2)
  boy.scale = 0.5;

  obstaclesGroup = createGroup();
  saplingGroup = createGroup();
  
}

function draw(__) {
  background("white");

  

  boy.x = World.mouseX;
  
  if(obstaclesGroup.isTouching(boy)){
    obstaclesGroup.destroyEach();
    boy.changeAnimation("boy2",boyImg2);
  }

  if(saplingGroup.isTouching(boy)){
    saplingGroup.destroyEach();
    boy.changeAnimation("boy2",boyImg2);
  }

  if(obstaclesGroup.isTouching(soil)){
    obstaclesGroup.destroyEach();
  }

  if(saplingGroup.isTouching(soil)){
    saplingGroup.destroyEach();
  }
  
spawnObstacles();
spawnSapling();

fill("red");
  textSize(20);
  text("Make sure the boy is collectig the garbage",200,100);

  drawSprites();
}


function spawnObstacles() {
  if (frameCount % 120 === 0){
var obstacle = createSprite(Math.round(random(100,400),20,20))
obstacle.velocityY = 3;
obstacle.scale = 0.4;

var rand = Math.round(random(1,3));
switch (rand){
  case 1: obstacle.addImage(trash1);
  break;
  case 2: obstacle.addImage(trash2);
  break;
  case 3 : obstacle.addImage(trash3);
  break;
  default: break;
}
obstaclesGroup.add(obstacle);
  }
}

function spawnSapling() {
  if (frameCount % 150 === 0){
var sapling = createSprite(Math.round(random(50,500),20,20))
sapling.velocityY = 3;
sapling.scale = 0.5;

var rand = Math.round(random(1,2));
switch (rand){
  case 1: sapling.addImage(seed);
  break;
  case 2: sapling.addImage(seed3);
  break;
  default: break;
}
saplingGroup.add(sapling);
  }
}

