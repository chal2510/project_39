
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var surtime;
var life;
var goImage;
var bg,bgI;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  goImage = loadImage("game over monkey game.png");
 bgI= loadImage("jungle background.png");
}



function setup() {
 createCanvas(600,400) 
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.addAnimation("out",goImage)
monkey.scale=0.1;
  
ground = createSprite(600,350,1300,5);
ground.velocityX=-4;
ground.shapeColor="black";
ground.visible=false;
score = 0;
surtime = 0;
life = 69;   
  foodGroup=new Group();
  obstaclesGroup=new Group();
  
 bg=createSprite(300,200);
  
 bg.addImage(bgI); 
  bg.scale=1.8;
}


function draw() {

background(0)
if(ground.x<0){
ground.x=ground.width/2;
}
 monkey.collide(ground); 
 if(keyDown("space")&&monkey.y>200){
monkey.velocityY=-10;
    } 
 monkey.velocityY=monkey.velocityY+0.5; 
  
  if(life===0){
monkey.changeAnimation("out",goImage);
    monkey.x=300;
    monkey.y=300;
    monkey.scale=1.5;
  ground.velocityX=0;
obstaclesGroup.destroyEach;
foodGroup.destroyEach;
  foodGroup.setLifetimeEach(-1);
 obstaclesGroup.setLifetimeEach(-1);
  }
  if(monkey.isTouching(obstaclesGroup)){
    life=life-1;
    monkey.velocityY=10;
  }
  
  if(frameCount%30===0){
   surtime=surtime+1;     
  }
  
  
  fill("lightblue");
  stroke("black");
  textSize(20);
  text("survival time:"+surtime,440,30);
  textSize(20);
  text("score:"+score,50,30);
  text("lifes remaing:"+life,220,30); 

  
  if(monkey.isTouching(foodGroup)){
  foodGroup.destroyEach();  
   score=score+Math.round(random(2,3)); 
  }
   
  banana1();
 rock();
  
  bg.depth=bg.depth-8;
  
 
  drawSprites();
}

function banana1(){
  if(frameCount%200===0){
 banana=createSprite(600,Math.round(random(80,180)),10,10);
 banana.addImage(bananaImage);
 banana.scale=0.12;
 banana.velocityX=-4;
 banana.lifetime=155;   
    foodGroup.add(banana);
}
}
  
function rock() {
  if(frameCount%200===0) {
    obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6; 
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;    
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
    
    
  }
}




