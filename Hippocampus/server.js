const express = require('express')
const path = require('path')
const http = require('http')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const users = require('./data').userDB

const app = express()
const server = http.createServer(app)

app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));

// Routes
function index(req, res){
    res.sendFile(__dirname + '/static/index.html')
}
async function login(req, res){
    try{
        let foundUser = users.find((data) => req.body.username === data.username)
        if(foundUser){
            let submittedPass = req.body.password
            let storedPass = foundUser.password

            const passwordMatch = await bcrypt.compare(submittedPass, storedPass)
            if(passwordMatch) {
                let usrname = foundUser.username
                res.send(`<div align ='center'><h2>login successful</h2></div><br><br><br><div align ='center'><h3>Hello ${usrname}</h3></div><br><br><div align='center'><a href='/loginPage'>logout</a></div>`)
            }else{
                res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align ='center'><a href='/loginPage'>login again</a></div>")
            }
        }else {
            let fakePass = `$2b$$10$ifgfgfgfgfgfgfggfgfgfggggfgfgfga`
            await bcrypt.compare(req.body.password, fakePass)
            res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align='center'><a href='/loginPage'>login again<a><div>");
        }
    }catch {
        res.send('Internal Server Error')
    }
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
async function register(req, res){
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

            res.send("<div align ='center'><h2>Registration successful</h2></div><br><br><div align='center'><a href='/loginPage'>login</a></div><br><br><div align='center'><a href='static/register.html'>Register another user</a></div>")
        }else{
            res.send("<div align ='center'><h2>Email already used</h2></div><br><br><div align='center'><a href='/registerPage'>Register again</a></div>")
        }
    } catch {
        res.send("Internal Server Error")
    }
}

app.post('/login', login)
app.get('/plan', plan)
app.get('/loginPage', (req, res) => {
    res.sendFile(__dirname + '/static/login.html')
})
app.get('/registerPage', (req, res)=>{
    res.sendFile(__dirname + '/static/register.html')
})
app.get('/articles', article)
app.get('/community', community)
app.post('/register', register)
app.get('/', index)
server.listen(3000, null)