const express = require('express')
const path = require('path')
const { send } = require('process')
const app = express()
const main = require('./app.js')

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));

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
function register(req, res){
    try{
        let foundUser = users.find((data) => req.body.email === data.email)
        if(!foundUser){
            let hashPassword = await bcrypt.hash(req.body.password, 10)
            let newUser = { 
                id: Date.now(),
                username: req.body.username,
                email: req.body.email,
                password: hashPassword,
            }
            users.push(newUser)
            console.log('User list: ', users)

            res.send("<div align ='center'><h2>Registration successful</h2></div><br><br><div align='center'><a href='./login.html'>login</a></div><br><br><div align='center'><a href='./registration.html'>Register another user</a></div>")
        }else{
            res.send("<div align ='center'><h2>Email already used</h2></div><br><br><div align='center'><a href='./registration.html'>Register again</a></div>")
        }
    } catch {
        res.send("Internal Server Error")
    }
}

app.get('/login', login)
app.get('/plan', plan)
app.get('/articles', article)
app.get('/community', community)
app.post('/register', register)
app.get('/*', index)
app.listen(3000)