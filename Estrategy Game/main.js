let canvas = document.getElementById('board')
let ctx = canvas.getContext('2d')

function draw(){
    table()
    let soldierBlue1 = new army(50, 50, 5, "Blue")
    let soldierRed1 = new army(400, 400, 5, "Red")
    window.requestAnimationFrame(draw)
}

draw()