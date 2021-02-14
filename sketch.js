var fixedRect, movingRect;



function setup() {
  createCanvas(1200,400);
  
  fixedRect = createSprite(600, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(300, 200, 40, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

}

function draw() {
background("black"); 
console.log(movingRect.x - fixedRect.x);

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;  

if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
  && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
fixedRect.shapeColor = "blue";
movingRect.shapeColor = "blue";
}
else{
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}

drawSprites();
}