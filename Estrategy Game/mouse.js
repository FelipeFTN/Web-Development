let blockSelected = []

function showCoords(event) {
    let x = event.clientX - 10;
    let y = event.clientY - 10;
    let coor = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coor;
    mouseListening(x, y)
}

function clearCoords() {
    document.getElementById("demo").innerHTML = "";
}
// Mouse Listening Hover
function mouseListening(x, y){
    for(let i = 0; i < 500; i+=50){
        for(let j = 0; j < 500; j+=50){
            if(x >= i && x <= i+50 && y >= j && y <= j+50){
                blockSelected = [i, j]
            }
        }
    }
}