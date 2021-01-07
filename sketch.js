const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bird;
var obstacles = [];
var score = 0;

function setup() {
  createCanvas(500,700);

  bird = new Bird();
  obstacles.push(new Obstacle());

}


function draw() {
  background(70,188,198); 

  score = score + Math.round(FrameCount = 1); 
  
  fill(255,0,0);
  textSize(35);
  textStyle(ITALIC);
  text("Score  " + score, 300,150);

  for(var i = 0; i < obstacles.length; i++){
    obstacles[i].display();
    obstacles[i].update();

    if(obstacles[i].hits(bird)){
      gameOver();
      background(255,0,0);
    }
  }

  bird.update();
  bird.display();

  if(frameCount % 100 === 0){
    obstacles.push(new Obstacle());
  }

}

function keyPressed(){
  if(keyCode === 32){
   bird.up();
  }
}

function gameOver(){
  obstacles = [];
  this.speed = 0;
  this.score = 0;
  
}