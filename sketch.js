var roadImage,mainPlayerImages,opponentPlayerImage,opponentPlayer;
var END=0;
var PLAY=1;
var gameState=PLAY;

function preload(){
roadImage=loadImage("images/Road.png");
mainPlayerImage1=loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
mainPlayerImage2=loadAnimation("images/mainPlayer3.png");
opponentImage1=loadAnimation("opponent4.png","opponent5.png");
opponentImage2=loadAnimation("opponent6.png");
}
function setup(){
createCanvas(1000,500);

road=createSprite(500,230);
road.addImage(roadImage);
//road.scale=5;
road.velocity.x=-5;

mainPlayer  = createSprite(70,150,20,20);
mainPlayer.addAnimation("SahilRunning",mainPlayerImage1);
mainPlayer.scale=0.07;
  //mainPlayer.debug=true;
  //mainPlayer.setCollider("rectangle",0,0,40,40);
  opponentgroup = new Group();
}
function draw(){
background(0);

drawSprites(); 

if(gameState===PLAY){
  road.velocityX = -5;
  if(road.x<0){
    road.x=width/2
  }
  mainPlayer.y = World.mouseY;
  opponent();
}

}
function opponent(){
if(frameCount%50===0){
  opponentPlayer=createSprite(400,Math.round(random(50,300,250)))
  opponentPlayer.addAnimation("oppo",opponentPlayerImage);
  opponentPlayer.velocityX=-4;
  opponentPlayer.scale=0.6;
  opponentgroup.add(opponentPlayer);
  opponentPlayer.setLifetime=50;
}
}