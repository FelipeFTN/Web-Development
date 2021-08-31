let canvas = document.getElementById('board')
let ctx = canvas.getContext('2d')

function table() {
    for (let i = 50; i < 500; i+=50){
        // Vertical Grid
        ctx.strokeStyle = "Gray"
        ctx.beginPath();
        ctx.setLineDash([2, ]);
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 500);
        ctx.stroke();
    
    // Horizontal Grid
        ctx.beginPath();
        ctx.setLineDash([2, ]);
        ctx.moveTo(0, i);
        ctx.lineTo(500, i);
        ctx.stroke();
        
    }
    
    // Kingdom area
    ctx.beginPath()
    ctx.fillStyle = 'Gray'
    ctx.fillRect(0, 0, 150, 150)
    // Blue team
    ctx.beginPath()
    ctx.fillStyle = 'Blue'
    ctx.fillRect(0, 0, 50, 50)
    // Kingdom area    
    ctx.beginPath()
    ctx.fillStyle = 'Gray'
    ctx.fillRect(350, 350, 150, 150)
    // Red team
    ctx.beginPath()
    ctx.fillStyle = 'Red'
    ctx.fillRect(450, 450, 50, 50)
    // Base A
    ctx.beginPath()
    ctx.fillStyle = 'Black'
    ctx.fillRect(0, 450, 50, 50)
    // Base B
    ctx.beginPath()
    ctx.fillStyle = 'Black'
    ctx.fillRect(450, 0, 50, 50)
    // Base C
    ctx.beginPath()
    ctx.fillStyle = 'Black'
    ctx.fillRect(225, 225, 50, 50)

}

function army(x, y, n, c) {
    ctx.beginPath();
    ctx.fillStyle = c;
    ctx.font = "30px Georgia";
    ctx.arc(x + 25, y + 25, 25, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "White";
    ctx.fillText(n, x + 15, y + 35);
    ctx.fill();
}

function draw(){
    table()

    window.requestAnimationFrame(draw)
}

function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coor = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("demo").innerHTML = coor;
}

function clearCoords() {
  document.getElementById("demo").innerHTML = "";
}

draw()