
var platform;
var platformGroup;
var mario, wall, obstacle;
var marioAnimation, groundAnimation, wallAnimation, obstacleAnimation;

function preload()
{
  marioAnimation = loadAnimation("images/Capture1.png", "images/Capture3.png", "images/Capture4.png");
  groundAnimation = loadAnimation("images/ground.png");
  wallAnimation = loadAnimation("images/wall.png");
  obstacleAnimation = loadAnimation("images/obstacle1.png");
}

function setup() 
{
  createCanvas(displayWidth, 700);

  var distanceX = 0;
  var gap;

  platformGroup = new Group();
  mario = new Player();

  for(var i=0; i<30; i=i+1)
  {
    platform = new Platform(distanceX); 
    platformGroup.add(platform.spt);
    gap = random([50, 60, 70, 80]);
    distanceX = distanceX + platform.sptw + gap;

    if(i%3 === 0)
    {
      wall = new Wall(distanceX);
      platformGroup.add(wall.spt);
    }

    if(i%3 === 0)
    {
      obstacle = new Obstacle(distanceX);
    }
    
  }
}

function draw() 
{
  background("skyblue");  

  translate(-mario.spt.x + width/2, 0, 0); 

  mario.applyGravity();
  mario.spt.collide(platformGroup);

  if(keyDown("right"))
  {
    mario.moveForward();
  }

  if(keyDown("left"))
  {
    mario.moveBackward();
  }

  if(keyDown("up") && mario.spt.velocityY === 0)
  {
    mario.jump();
  } 
  drawSprites();
}

