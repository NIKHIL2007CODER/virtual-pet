var database;
var dog , dogImg1 , dogImg2 ;
var foodS , foodStock ;
var canvas;

function preload(){
    dogImg1 = loadImage("Dog.png");
    dogImg2 = loadImage("happydog.png");
}
function setup(){
    canvas = createCanvas(1345,609);      
    
    database = firebase.database();
    console.log(database);
    
    dog = createSprite(200,400,50,50);
    dog.addImage(dogImg1);
    dog.scale = 0.3

    foodStock = database.ref('Food');
    foodStock.on("value",readStock);

}

function draw(){
    background(46, 139, 87);

    textSize(30);
    fill(137,36);
    stroke(255,255,255);
    textFont("harrington")
    text("FOOD LEFT : " + foodS , 50,80);

    textSize(30);
    fill(137,36);
    stroke(255,255,255);
    textFont("harrington")
    text("NOTE: USE UP ARROW ⬆ KEY TO FEED THE DOG   !", 590,540);
    text("NOTE: USE SAPCE KEY FOR ANOTHER 25 STACK OF FOOD  !",500,80);
   
    if(keyWentDown(UP_ARROW)){
        writeStock(foodS);
        dog.addImage(dogImg2);
        foodS = foodS -1;
      }
     
     
        else if(keyWentDown(32)){
              foodS = foodS +25 ;
          }
      
    drawSprites();

   
   
}

function readStock(data){
   foodS = data.val();
}

function writeStock(x){
    database.ref('/').update({
        Food:x
    })

  
}







