var ball

function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,13,13)
}

function draw() 
{

  background("black");
  
  if (keyIsDown (RIGHT_ARROW)) {
    ball.x+=3
    background("green");

  }

  if (keyIsDown (LEFT_ARROW)) {
    ball.x-=3
    background("red");
    
  }

  if (keyIsDown (UP_ARROW)) {
    ball.y-=3
    background("orange");

  }
  
  if (keyIsDown (DOWN_ARROW)) {
    ball.y+=3
    background("lime");
  }

  drawSprites();
}




