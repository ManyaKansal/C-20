var movedrect;
var fixedrect;
function setup() {
  createCanvas(800,400);
  movedrect = createSprite(400, 200, 50, 50);
  fixedrect = createSprite(200,200,30,100);
  movedrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
}

function draw() {
  background("black"); 
  movedrect.x = mouseX;
  movedrect.y =mouseY;

  if(movedrect.x - fixedrect.x < movedrect.width/2 + fixedrect.width/2 && 
    fixedrect.x - movedrect.x < movedrect.width/2 + fixedrect.width/2&&
    movedrect.y - fixedrect.y < movedrect.height/2 + fixedrect.height/2 &&
    fixedrect.y - movedrect.y < movedrect.height/2 + fixedrect.height/2){
      movedrect.shapeColor = "red";
      fixedrect.shapeColor = "red";
  }
else{
  movedrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
}
  drawSprites();
}