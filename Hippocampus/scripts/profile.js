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
    if(courses.length > 2){
        confirmBtn.style.backgroundColor = "#4ECCA3";
        confirmBtn.style.color = "White";
        confirmBtn.addEventListener("click", confirmPressed);
    }else{
        confirmBtn.style.backgroundColor = "#5e8555";
        confirmBtn.style.color = "#404040";
        table.style.display = "hidden";
    }
}
createBtn.addEventListener("click", createElement);
colorBtn.addEventListener("click", changeColor);
//IMPLEMENT ON TABLE
let pause = 5.00;
let tableContent = ['time', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

function confirmPressed(){
    table.style.display = null;
    let x = 0;
    //FILL DATES
    for(let i = 0; i < 6; i+=2){
        if(x >= courses.length){
            x = 0;
        }
        let addCourses = tableContent[1]+i;
        document.getElementById(addCourses).innerHTML = courses[x];
        x++;
    }
    for(let j = 0; j < 6; j++){
        let checkCourses = tableContent[1]+j;
        let sundayElement = document.getElementById(checkCourses);
        if(sundayElement.innerHTML == ""){
            sundayElement.innerHTML = "Pausa";
        }
    }
    for(let i = 0; i < 6; i+=2){
        if(x >= courses.length){
            x = 0;
        }
        let addCourses = tableContent[2]+i;
        document.getElementById(addCourses).innerHTML = courses[x];
        x++;
    }
    for(let j = 0; j < 6; j++){
        let checkCourses = tableContent[2]+j;
        let sundayElement = document.getElementById(checkCourses);
        if(sundayElement.innerHTML == ""){
            sundayElement.innerHTML = "Pausa";
        }
    }
    for(let i = 0; i < 6; i+=2){
        if(x >= courses.length){
            x = 0;
        }
        let addCourses = tableContent[3]+i;
        document.getElementById(addCourses).innerHTML = courses[x];
        x++;
    }
    for(let j = 0; j < 6; j++){
        let checkCourses = tableContent[3]+j;
        let sundayElement = document.getElementById(checkCourses);
        if(sundayElement.innerHTML == ""){
            sundayElement.innerHTML = "Pausa";
        }
    }
    for(let i = 0; i < 6; i+=2){
        if(x >= courses.length){
            x = 0;
        }
        let addCourses = tableContent[4]+i;
        document.getElementById(addCourses).innerHTML= courses[x];
        x++;
    }
    for(let j = 0; j < 6; j++){
        let checkCourses = tableContent[4]+j;
        let sundayElement = document.getElementById(checkCourses);
        if(sundayElement.innerHTML == ""){
            sundayElement.innerHTML = "Pausa";
        }
    }
    for(let i = 0; i < 6; i+=2){
        if(x >= courses.length){
            x = 0;
        }
        let addCourses = tableContent[5]+i;
        document.getElementById(addCourses).innerHTML = courses[x];
        x++;
    }
    for(let j = 0; j < 6; j++){
        let checkCourses = tableContent[5]+j;
        let sundayElement = document.getElementById(checkCourses);
        if(sundayElement.innerHTML == ""){
            sundayElement.innerHTML = "Pausa";
        }
    }
    for(let i = 0; i < 6; i+=2){
        if(x >= courses.length){
            x = 0;
        }
        let addCourses = tableContent[6]+i;
        document.getElementById(addCourses).innerHTML = courses[x];
        x++;
    }
    for(let j = 0; j < 6; j++){
        let checkCourses = tableContent[6]+j;
        let sundayElement = document.getElementById(checkCourses);
        if(sundayElement.innerHTML == ""){
            sundayElement.innerHTML = "Pausa";
        }
    }
    for(let i = 0; i < 6; i+=2){
        if(x >= courses.length){
            x = 0;
        }
        let addCourses = tableContent[7]+i;
        document.getElementById(addCourses).innerHTML = courses[x];
        x++;
    }
    for(let j = 0; j < 6; j++){
        let checkCourses = tableContent[7]+j;
        let sundayElement = document.getElementById(checkCourses);
        if(sundayElement.innerHTML == ""){
            sundayElement.innerHTML = "Pausa";
        }
    }
    //FILL TIME
    let initialSchedule = document.getElementById("initialTime");
    let intervalSchedule = document.getElementById("intervalTime");
    let initialTime = initialSchedule.value.split(":");
    let intervalTime = intervalSchedule.value.split(":");
    let nextTime = parseInt(initialTime[0], 10);
    let minutes = parseInt(initialTime[1], 10);
    if(minutes >= 60){
        minutes -= 60;
        nextTime += 1;
    }
    
    for(let i = 0; i < 6; i++){
        if(minutes >= 60){
            minutes -= 60;
            nextTime += 1;
        }
        let timeNumber = tableContent[0]+i;
        document.getElementById(timeNumber).innerHTML = nextTime+":"+ minutes;
        if(minutes.toString().length <= 1){
            document.getElementById(timeNumber).innerHTML = nextTime+":"+minutes+"0";
        }
        nextTime += parseInt(intervalTime[0], 10);
        minutes += parseInt(intervalTime[1], 10);
    }
}