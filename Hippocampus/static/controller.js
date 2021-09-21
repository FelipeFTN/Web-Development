//Create all actions: Buttons...
const login = document.getElementById("loginButton");
const plan = document.getElementById("createPlan");

login.addEventListener("click", makeLogin)
plan.addEventListener("click", createPlan)

function makeLogin(){
    window.location.href = '/login'
}

function createPlan(){
    window.location.href = '/plan'
}

