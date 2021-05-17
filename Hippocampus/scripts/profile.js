//TABLE INVISIBLE
var table = document.getElementsByClassName("schedule-table")[0];
table.style.display = "none";

//Canvas Button
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.font = "10px Comic Sans MS";
ctx.textAlign = "center";
//ctx.fillStyle = "#4ECCA3";
//ctx.fillRect(0, 0, 100, 100);
ctx.fillStyle = "White";
ctx.fillText("Cor", canvas.width/2, canvas.height/2 + 3);