const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");


let x = canvas.width/2;
let y = canvas.height/2;
let dx = 1;
let dy = -1;

function init(){
    //ball
    ctx.beginPath();
    ctx.rect(x,y,25,25);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    //left paddle
    ctx.beginPath();
    ctx.rect(20,200,25,100);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    //right paddle
    ctx.beginPath();
    ctx.rect(655,200,25,100);
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
        x += dx;
        y += dy;
    
}
setInterval(play, 10);




