//Create variables here
var currentTime
var dog;
var happyDog;
var dogSprite;
var foodStock;
var dataBase;
var lastFed;
var gameState;
var js;
var food;
var gs;
var sad
function preload()
{
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
  sad = loadImage("images/deadDog.png");
  play = loadImage("images/living Room.png")
	//load images here
}

function setup() {
  createCanvas(800, 700);
  food = new Food();
  gs = new GameState();

  currentTime = hour()/12
  text("food="+foodStock,100,20);
  database = firebase.database();
  dogSprite = createSprite(600,220,50,50);
  gs.getGameState();
  dogSprite.addImage("dog",dog);
  dog.resize(150,150);
  dogSprite.addImage("happyDog",happyDog);

  feed = createButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(food.deductFood);

  supply = createButton("Buy food");
  supply.position(800,95);
  supply.mousePressed(food.addFood);

}


function draw() {  
  background(46, 139, 87);
  database.ref("lastFed").on("value",(data)=>{
    lastFed = data.val();
  });
  food.getFoodStock();
  
  textSize(15);
  stroke("black");
  fill("white")
  text("food="+foodStock,100,20);
  food.display();
  drawSprites();
  if(lastFed>12){
  textSize(15);
  stroke("black");
  fill("white")
  text("LAST FED "+lastFed%12+"PM",500,95);
  }
  else if(lastFed == 12){
    textSize(15);
    stroke("black");
    fill("white")
    text("LAST FED "+lastFed+"PM",500,95);
  }
  else if(lastFed == 0){
    textSize(15);
    stroke("black");
    fill("white")
    text("LAST FED "+12+"AM",500,95);
  }
  else{
    textSize(15);
    stroke("black");
    fill("white")
    text("LAST FED "+lastFed+"AM",500,95);
  }
  gs.currentTime();
  gs.changeGameState();

  if(gameState == "playing"){
    background("green");
  }
  if(gameState == "sadDog"){
    background("red");
  }

  if(gameState = bathing){
    background("blue")
  }
}





