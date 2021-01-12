var playground, playgroundimage;
var balloon, balloonimage, balloon2, balloon2image;
var balloon3, balloon3image, balloon4, balloon4image;
var bow, bowimage; 
var arrow, arrowimage;
var score = 0;

function preload(){
 //load your images here 
  playgroundimage = loadImage("background0.png");
  balloonimage = loadImage("blue_balloon0.png")
  balloon2image = loadImage("red_balloon0.png")
  balloon3image = loadImage("pink_balloon0.png")
  balloon4image = loadImage("green_balloon0.png")
  bowimage = loadImage("bow0.png")
  arrowimage = loadImage("arrow0.png")
}

function setup() {
  createCanvas(400, 400);
  //add code here
  playground = createSprite(0,  0, 400, 400);
  playground.addImage(playgroundimage)
  playground.scale = 2.3
  playground.x = playground.width/2
  playground.velocityX = -2
  bow = createSprite(370, 200, 50 ,50)
  bow.addImage(bowimage)
  balloonGroup = new Group();
  balloon2Group = new Group();
  balloon4Group = new Group()
  balloon3Group = new Group()
  arrowGroup = new Group()
  
}

function draw() {
  //add code here
  
  background("black")
  bow.y = World.mouseY
  
  if (playground.x < 0) {
    playground.x = playground.width/2
  }
  
  if (keyDown("space")) {
    createarrows();
  }
  
  if (arrowGroup.isTouching(balloon)) {
    balloonGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  
  if (arrowGroup.isTouching(balloon2)) {
    balloon2Group.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
  }
  
  if (arrowGroup.isTouching(balloon3)) {
    balloon3Group.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }
  
  if (arrowGroup.isTouching(balloon4)) {
    balloon4Group.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;score=score+4;
  }
  
  createarrows()
  spawngreenballoon();
  spawnpinkballoon();
  spawnredballoon();
  spawnblueballoon(); 
  drawSprites();
  textSize(15)
  fill("black"); 
  text("Score: " + score, 270, 30)
}

 function spawnblueballoon() {
   if (frameCount % 100===0) {
    balloon = createSprite(0, Math.round(random(10, 100)), 15, 15)
    balloon.addImage(balloonimage)
    balloon.scale = 0.1
    balloon.velocityX = 2
    balloon.lifetime = 150
    balloonGroup.add(balloon);
   }
   
 }
 function spawnredballoon() {
   if (frameCount % 120===0) {
    balloon2 = createSprite(0, Math.round(random(100, 200)), 15, 15)
    balloon2.scale = 0.095
    balloon2.addImage(balloon2image)
    balloon2.velocityX = 2
    balloon2.lifetime = 150
    balloon2Group.add(balloon2)
   }
   
 }
 function spawnpinkballoon() {
   if (frameCount % 140===0) {
    balloon3 = createSprite(0, Math.round(random(200, 300)), 15, 15)
    balloon3.scale = 1.2
    balloon3.addImage(balloon3image)
    balloon3.velocityX = 2
    balloon3.lifetime = 150
    balloon3Group.add(balloon3)
   }
   
 }
  function spawngreenballoon() {
    if (frameCount % 150===0) {
    balloon4 = createSprite(0  , Math.round(random(300, 390)), 15, 15)
    balloon4.scale = 0.090
    balloon4.addImage(balloon4image)
    balloon4.velocityX = 2
    balloon4.lifetime = 150
    balloon4Group.add(balloon4)
    }
  } 

  function createarrows() {
    if(keyWentDown("space")) {
    arrow = createSprite(350, 200) 
    arrow.scale = 0.3
    arrow.addImage(arrowimage)
    arrow.velocityX = -5
    arrow.y = bow.y
    arrow.lifetime = 50
    arrowGroup.add(arrow)
    } 
   }
 