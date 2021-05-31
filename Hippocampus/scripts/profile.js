//TABLE INVISIBLE
let table = document.getElementsByClassName("schedule-table")[0];
table.style.display = "none";
//ADD COURSES
let input = document.getElementById("courses-input");
let createBtn = document.getElementById("create-btn");
let ul = document.getElementById("courses");

function createElement(){
    let inputText = document.createTextNode(input.value);
    let li = document.createElement("li");
    li.appendChild(inputText);
    ul.appendChild(li);
    input.value = "";
}
createBtn.addEventListener("click", createElement);
