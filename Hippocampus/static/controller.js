//Create all actions: Buttons...
let login = document.getElementById("loginButton");

login.addEventListener("click", makeLogin)

function makeLogin(){
    window.location.href = '/login'
}