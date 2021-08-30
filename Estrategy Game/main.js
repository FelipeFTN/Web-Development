let canvas = document.getElementById('board')
let ctx = canvas.getContext('2d')

function draw(){
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

    // Vertical Grid
    for (let i = 50; i < 500; i+=50){
        ctx.beginPath()
        ctx.fillRect(i,0, 1, 500)
    }
    // Horizontal Grid
    for (let j = 50; j < 500; j+=50){
        ctx.beginPath()
        ctx.fillRect(0, j, 500, 1)
    }


    window.requestAnimationFrame(draw)
}
draw()