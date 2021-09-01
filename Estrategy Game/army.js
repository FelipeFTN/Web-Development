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
