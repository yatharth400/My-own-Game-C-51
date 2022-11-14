var missile,background,spaceship,rocket,blast
var missileImg,backgroundImg,spaceshipImg,rocketImg,gamewin,gamelose
var missileGroup,spaceshipGroup

var life = 5
var score = 0
var gameState = 1

function preload(){
backgroundImg= loadImage("background.jpg")
rocketImg = loadImage("rocket.png")
missileImg = loadImage("missile.png")
spaceshipImg = loadImage("spaceship.png")
blastImg = loadImage("blast.png")
gamewin = loadSound("win.mp3")
gamelose = loadSound("lose.mp3")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
rocket = createSprite(width/2,550,50)
rocket.addImage(rocketImg)


rocket.scale=0.2

spaceshipGroup = createGroup()
missileGroup = createGroup()

}

function draw() {
  background(backgroundImg); 
  
if(life===0){
 
  textSize(100)
  fill("red")
  text("lost:You Lost The Game",width/2-500,height/2)
  gamelose.play()
  rocket.destroy()
spaceshipGroup.destroy ()
missileGroup.destroyEach()

}
if(score===100){

textSize(100)
fill("green")
text("Won:You Won The Game",width/3-400,height/ 2)
gamewin.play()
rocket.destroy()
spaceshipGroup.destroy()
missileGroup.destroyEach()

}
  
  textSize(40)
 fill ("white")
  text("Life:"+life,width-130,50) 


  textSize(40)
 fill ("white")
  text("Score:"+score,width-350,50) 

if(gameState===1){
rocket.x=mouseX 
if(spaceshipGroup.isTouching(missileGroup)){
  for(var i=0;i<spaceshipGroup.length;i++){
    if(spaceshipGroup[i].isTouching(missileGroup)){
      spaceshipGroup[i].destroy()
      score+=1
    }
  }


}
if(spaceshipGroup.isTouching(rocket)){
  for(var i=0;i<spaceshipGroup.length;i++){
    if(spaceshipGroup[i].isTouching(rocket)){
      spaceshipGroup[i].destroy()
      life-=1
    }
  }

  if(spaceshipGroup.isTouching(missileGroup)){
    for(var i=0;i<spaceshipGroup.length;i++){     

     if(spacaeshipGroup[i].isTouching(missileGroup)){

          missileGroup.destroyEach()
        spaceshipGroup[i].destroyEach()
          } 
    
    }
  }
}

if(frameCount%35==0){
  drawspaceship()
}

if(keyDown("space")){
 ShootMissile()
}
drawSprites();
}

function ShootMissile(){
  missile = createSprite(width/2,400,50)
  missile.x= rocket.x-1
missile.addImage(missileImg)
missile.scale=0.05
missile.velocityY =-7
missileGroup.add(missile)
}

function drawspaceship(){
  spaceship = createSprite(random(20,1000),40,40) 
spaceship.addImage(spaceshipImg)
spaceship.scale=0.2
spaceship.velocityY=5
spaceship.lifetime=400
spaceshipGroup.add(spaceship)

}

}
