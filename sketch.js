var fixedRect, movingRect;
var gameObj1,gameobj2,gameobj3,gameobj4
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObj1 = createSprite(120,200,70,40);
  gameObj1.shapeColor = "red";
  gameobj2 = createSprite(160,500,40,90);
  gameobj2.shapeColor = "red"
  gameobj3 = createSprite(130,400,60,85);
  gameobj3.shapeColor = "red"
  gameobj4 = createSprite(500,300,30,80);
  gameobj4.shapeColor = "red";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,gameobj4)){
    movingRect.shapeColor = "blue";
    gameobj4.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    gameobj4.shapeColor = "green";
  }
  drawSprites();
}
function isTouching(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
}
else{
  return false;
}
}