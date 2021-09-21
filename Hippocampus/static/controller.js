//Create all actions: Buttons...
const login = document.getElementById("loginButton");
const plan = document.getElementById("createPlan");
const articles = document.getElementById("articles");

login.addEventListener("click", routeLogin)
plan.addEventListener("click", routePlan)
articles.addEventListener("click", routeArticles)

function routeLogin(){
    window.location.href = '/login'
}

function routePlan(){
    window.location.href = '/plan'
}

function routeArticles(){
    window.location.href = '/articles'
}

