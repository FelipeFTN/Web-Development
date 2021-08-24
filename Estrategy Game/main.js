let canvas = document.getElementById('board')
let ctx = canvas.getContext('2d')

document.addEventListener("keydown", move)

let x = 0
let y = 0
let dx = 0
let dy = 0

function move(event){
    if(event.key == "ArrowRight"){
        dx = 20
    }else if(event.key == "ArrowUp"){
        dy = -20
    }else if(event.key == "ArrowDown"){
        dy = 20
    }else if(event.key == "ArrowLeft"){
        dx = -20
    }
    x += dx
    y += dy
    dx = 0
    dy = 0
    console.log("x: ", x, " y: ", y)
}

function draw(){
    ctx.clearRect(0, 0, 500, 500)
    ctx.fillRect(x, y, 50, 50)
    window.requestAnimationFrame(draw)
}
draw()