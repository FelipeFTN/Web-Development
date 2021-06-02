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
let colors = ['#4ECCA3', 'Red', 'Blue', 'Green', 'Purple', 'Orange'];
function changeColor() {
    color += 1;
    if(color >= colors.length){
        color = 0;
    }
    colorBtn.style.backgroundColor = colors[color];
}
//CREATE CURSES LI
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

    } else {
        return false;
    }
}
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
