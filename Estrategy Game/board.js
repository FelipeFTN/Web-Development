function table() {
    ctx.clearRect(0, 0, 500, 500)
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
    // Mouse Block Selected
    ctx.beginPath()
    ctx.fillStyle = 'Orange'
    ctx.fillRect(blockSelected[0], blockSelected[1], 50, 50)
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