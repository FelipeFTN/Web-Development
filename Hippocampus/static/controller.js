//Create all actions: Buttons...
const login = document.getElementById("loginButton");
const plan = document.getElementById("createPlan");
const articles = document.getElementById("articles");
const community = document.getElementById("community");

login.addEventListener("click", routeLogin)
plan.addEventListener("click", routePlan)
articles.addEventListener("click", routeArticles)
community.addEventListener("click", routeCommunity)

function routeLogin(){
    window.location.href = '/login'
}

function routePlan(){
    window.location.href = '/plan'
}

function routeArticles(){
    window.location.href = '/articles'
}
function routeCommunity(){
    window.location.href = '/community'
}

