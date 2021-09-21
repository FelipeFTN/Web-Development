const express = require('express')
const path = require('path')
const app = express()

// Routes
function index(req, res){
    res.sendFile(__dirname + '/static/index.html')
}
function login(req, res){
    res.sendFile(__dirname + '/static/login.html')
}
function plan(req, res){
    res.sendFile(__dirname + '/static/plan.html')
}
function article(req, res){
    res.sendFile(__dirname + '/static/articles.html')
}
function community(req, res){
    res.sendFile(__dirname + '/static/community.html')
}
app.use(express.urlencoded());
app.use(express.json());
function loginCheck(req, res){
    res.send('Recebido'+ req.body.name)
}
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', index)
app.get('/login', login)
app.post('/loginCheck', loginCheck)
app.get('/plan', plan)
app.get('/articles', article)
app.get('/community', community)
app.listen(3000)
// teste