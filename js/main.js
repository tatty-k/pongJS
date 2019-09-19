const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20,200,25,100);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(655,200,25,100);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(350,250,25,25);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
