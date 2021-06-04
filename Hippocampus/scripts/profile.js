//TABLE INVISIBLE
let table = document.getElementsByClassName("schedule-table")[0];
table.style.display = "none";
//ADD COURSES
let input = document.getElementById("courses-input");
let createBtn = document.getElementById("create-btn");
let ul = document.getElementById("courses");
let colorBtn = document.getElementById('color-btn');
let color = 0;
let confirmBtn = document.getElementById("confirm");
let courses = [];
const colors = ['#4ECCA3', '#bd3535', '#4456bd', '#18ad1b', '#6d3ebd', '#bd733e'];

function changeColor() {
    color += 1;
    if(color >= colors.length){
        color = 0;
    }
    colorBtn.style.backgroundColor = colors[color];
}
//CREATE COURSES LI
function createElement(){
    if (input.value.trim() != "") {
        let inputText = document.createTextNode(input.value);
        let li = document.createElement("li");
        courses.push(input.value);
        li.style.color = colors[color];
        li.className = "coursesList";
        li.appendChild(inputText);
        ul.appendChild(li);
        input.value = "";
        li.addEventListener("click",  deleteLi);
        li.addEventListener("click", confirmColor);
        confirmColor();
    } else {
        return false;
    }
}
//DELETE COURSES LI
function deleteLi(){
    for(let i = 0; i < courses.length; i++){
        if(courses[i] == this.innerText){
            let deleteIndex = courses.indexOf(this.innerText);
            courses.splice(deleteIndex, 1);
        }
    }
    console.log(this.value);
    this.remove();
}
document.addEventListener('keydown', (event) => {
    let name = event.key;
    let code = event.code;
    if(name == 'Enter'){
        createElement();
    }
});
function confirmColor(){
    if(courses.length > 0){
        confirmBtn.style.backgroundColor = "#4ECCA3";
        confirmBtn.style.color = "White";
    }else{
        confirmBtn.style.backgroundColor = "#5e8555";
        confirmBtn.style.color = "#404040";
    }
}
createBtn.addEventListener("click", createElement);
colorBtn.addEventListener("click", changeColor);
confirmBtn.addEventListener("click", confirmPressed);
//IMPLEMENT ON TABLE
let pause = 5.00;
let initialTime = 12.00;
let finalTime = 18.00;
let tableContent = ['time', 'sunday', 'monday', 'thuesday', 'wednessday', 'thursday', 'saturday'];

function confirmPressed(){
    table.style = null;
    for(let i = 1; i < 6; i+=2){
        let addPause = tableContent[1]+i;
        document.getElementById(addPause).innerHTML = "Pausa";
    }
    for(let i = 0; i < 6; i+=2){
        let addCourses = tableContent[1]+i;
        document.getElementById(addCourses).innerHTML = courses[courses.length];
    }
}