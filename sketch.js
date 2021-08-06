var seaImage , sea;
var shipImage , ship;
function preload(){
seaImage = loadImage("sea.png")
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(600,300);
  sea = createSprite(600,150)
  sea.addImage(seaImage);
  sea.scale=0.4;
  sea.velocityX=-4;
  
  ship = createSprite(50,190,20,20)
  ship.addAnimation("ship",shipImage);
  ship.scale=0.15;


}

function draw() {
  background("blue")
 drawSprites();

 if (sea.x < 0) {
  sea.x = sea.width / 6;
}
}