const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

//ball placement and positioning 
let x = canvas.width/2;
let y = canvas.height/2;
let dx = 1;
let dy = -1;

//left paddle placement and positioning
let rpaddleHeight = 100;
let rpaddleWidth = 25;
let rpaddleY = (canvas.height - rpaddleHeight) / 2; 

//right paddle placement and positioning
// let paddleHeight = 100;
// let paddleWidth = 25;
// let paddleY = (canvas.height - rpaddleHeight) / 2; 

let upPressed = false;
let downPressed = false;

document.addEventListener("keydown", keyDownhandler)
document.addEventListener("keyup", keyUphandler)

function keyDownhandler(e){
    if(e.key == "Down" || e.key == "ArrowDown"){
        downPressed = true;
    } 
    else if(e.key == "Up" || e.key == "ArrowUp"){
        upPressed = true;
    }     
}

function keyUphandler(e){
    if(e.key == "Down" || e.key == "ArrowDown"){
        downPressed = false;
    } 
    else if(e.key == "Up" || e.key == "ArrowUp"){
        upPressed = false;
    }     
}


function init(){
    //ball
    ctx.beginPath();
    ctx.rect(x,y,25,25);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    //left paddle
    ctx.beginPath();
    // ctx.rect(20,200,25,100);
    ctx.rect( 20, 200,25,100);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    //right paddle
    ctx.beginPath();
    ctx.rect(655, rpaddleY , rpaddleWidth , rpaddleHeight);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

function play(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        init();

        if(y + dy > canvas.height || y + dy < 0){
            dy = -dy
        }
        if(x + dx > canvas.width || x + dx < 0){
            x = canvas.width/2;
            y = canvas.height/2;
            dx *= -1
            dy *= -1
        }
        if(upPressed){
            rpaddleY -= 7;
            if(rpaddleY < 0){
                rpaddleY = 0;
            }
        }
        else if (downPressed){
            rpaddleY +=7
            if(rpaddleY + rpaddleHeight > canvas.height){
                rpaddleY = canvas.height - rpaddleHeight;
            }
        }

        x += dx;
        y += dy;
    
}
setInterval(play, 10);




