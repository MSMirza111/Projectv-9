
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
  box.shapeColor = "white";
}
  

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  if (keyIsDown(RIGHT_ARROW))
  {
    background("red");
  }
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }

if(keyDown("right")){
  box.x = box.x + 5;
}
  if(keyDown("left")){
   box.x = box.x -5;
  }

if(keyDown("up")){
  box.y = box.y - 5;
}

if(keyDown("down")){
  box.y = box.y + 5;
}



  drawSprites();
}

