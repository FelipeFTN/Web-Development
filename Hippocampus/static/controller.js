// Create all actions: Buttons and Routes
const login = document.getElementById("loginButton");
const plan = document.getElementById("createPlan");
const articles = document.getElementById("articles");
const community = document.getElementById("community");
const home = document.getElementById('home')

login.addEventListener("click", routeLogin)
plan.addEventListener("click", routePlan)
articles.addEventListener("click", routeArticles)
community.addEventListener("click", routeCommunity)
home.addEventListener('click', routeHome)

function routeLogin(){window.location.href = '/login'}
function routePlan(){window.location.href = '/plan'}
function routeArticles(){window.location.href = '/articles'}
function routeCommunity(){window.location.href = '/community'}
function routeHome() {window.location.href = '/'}
