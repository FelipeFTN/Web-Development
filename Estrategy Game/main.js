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

    window.requestAnimationFrame(draw)
}
draw()