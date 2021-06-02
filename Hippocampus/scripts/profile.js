//TABLE INVISIBLE
let table = document.getElementsByClassName("schedule-table")[0];
table.style.display = "none";
//ADD COURSES
let input = document.getElementById("courses-input");
let createBtn = document.getElementById("create-btn");
let ul = document.getElementById("courses");
let colorBtn = document.getElementById('color-btn');
let color = 0;
let courses = [];
//CREATE CURSES LI
function createElement(){
    if (input.value.trim() != "") {
        let inputText = document.createTextNode(input.value);
        let li = document.createElement("li");
        courses.push(inputText);
        li.appendChild(inputText);
        ul.appendChild(li);
        input.value = "";
    } else {
        return false;
    }
}
document.addEventListener('keydown', (event) => {
    let name = event.key;
    let code = event.code;
    if(name == 'Enter'){
        createElement();
    }
});
function changeColor() {
    let colors = ['#4ECCA3', 'Red', 'Blue', 'Green', 'Purple', 'Orange'];
    color += 1;
    colorBtn.style.backgroundColor = colors[color];
    if(color == colors.length){
        color = 0;
    }
}
createBtn.addEventListener("click", createElement);
colorBtn.addEventListener("click", changeColor);
/*
//IMPLEMENT ON TABLE
let pause = 5.00;
let initialTime = 12.00;
let finalTime = 18.00;
for(let s = 0; s < 4; s++){//IMPLEMENT ON SUNDAY
    
}
*/
