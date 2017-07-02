//Setting
var snakeX = 2;
var snakeY = 2;
var height = 30;
var width = 30;
var interval = 100;
var increment = 1;

//game variables
var tailX = [snakeX];
var tailY = [snakeY];
var fX;
var fY;
var running;
var gameOver;
var direction = -1; // up = 0, down = -1. left = 1,right = 2
var int;

/*
entrypoint of game
*/
function run(){
    init();
    int =  setInterval(gameLoop,interval);
}

function init(){
    createMap();
    createSnake();
    createFruit();
}

/**
 * Genarate the map for snake
 */
function createMap(){
    document.write("<table>");

    for(var y = 0; y < height; y++){
        document.write("<tr>");
        for(var x = 0; x < width ;x++){
            if(x == 0 || x == width-1 || y == 0 || y == height-1 ){
                document.write("<td class='wall' id ='" + x + "-" + y + "' ></td>");
            }else{
                document.write("<td class='blank' id ='" + x + "-" + y + "' ></td>");
            }
        }
        document.write("</tr>");
    }

    document.write("</table>");
}

function createSnake(){
    set(snakeX,snakeY,"snake");
}
function get(x,y){ 
    return document.getElementById(x+"-"+y); 
} 
function set(x,y,value){
   if(x != null && y != null) 
        get(x,y).setAttribute("class", value); 
}

function rand(min,max){
    return Math.floor(Math.random() * (max-min) + min);
}

function getType(x,y){
    return get(x,y).getAttribute("class");
}

function createFruit(){
    var found = false;
    while(!found && (length < (width-2)*(height-2)+1)){
            var fruitX = rand(1,width-1);
            var fruitY = rand(1,height-1);
            if(getType(fruitX,fruitY) == "blank")
                found = true;
    }
    set(fruitX, fruitY, "fruit");
    fx = fruitX;
    fy = fruitY;
}
run();
