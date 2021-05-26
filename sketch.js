var fixedRect, movRect;
var bounceRect1, bounceRect2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(300, 300, 50, 50);
  fixedRect.shapeColor="blue";

  movRect = createSprite(380,200,50,50);
  movRect.shapeColor="blue";

  bounceRect1 = createSprite(250,200,50,50);
  bounceRect1.shapeColor = "yellow";
  bounceRect1.velocityX = 3;

  bounceRect2 = createSprite(450,200,50,50);
  bounceRect2.shapeColor = "yellow";
  bounceRect2.velocityX = -3;

  fixedRect.debug = true;
  movRect.debug = true;

  bounceRect1.debug = true;
  bounceRect2.debug = true;
}

function draw() {
  background("lightgreen");  

  movRect.x = mouseX;
  movRect.y = mouseY;
// collision detection
if(movRect.x- fixedRect.x < fixedRect.width/2 + movRect.width/2 &&
  fixedRect.x -movRect.x < movRect.width/2 +  fixedRect.width/2 && 
  fixedRect.y - movRect.y < fixedRect.height/2 + movRect.height/2 &&
  movRect.y - fixedRect.y < movRect.height/2 + fixedRect.height/2) {
  fixedRect.shapeColor="green";
  movRect.shapeColor="green";

}
else {
  fixedRect.shapeColor="blue";
  movRect.shapeColor="blue";

}
//bounce
if(bounceRect1.x - bounceRect2.x < bounceRect1.width/2 + bounceRect2.width/2 &&
  bounceRect2.x - bounceRect1.x < bounceRect2.width/2 + bounceRect1.width/2){
  bounceRect1.velocityX = bounceRect1.velocityX*(-1);
  bounceRect2.velocityX = bounceRect2.velocityX*(-1);
}

if(bounceRect1.y - bounceRect2.y < bounceRect1.height/2 + bounceRect2.height/2 &&
  bounceRect2.y - bounceRect1.y < bounceRect2.height/2 + bounceRect1.height/2){
  bounceRect1.velocityY = bounceRect1.velocityY*(-1);
  bounceRect2.velocityY = bounceRect2.velocityY*(-1);
}

  drawSprites();
}