const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
const port = 3001
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "secret",
    database: "hippocampus",
})

app.post('/register', (req, res) =>{

    const userEmail = req.body.userEmail
    const username = req.body.username
    const password = req.body.password

    db.query("INSERT INTO users (username, password, email) VALUES (?, ?, ?)", [username, password, userEmail],
    (err, result) => {
        console.log(err)
    })
})

app.post('/login', (req, res) =>{
    const userEmail = req.body.userEmail
    const username = req.body.username
    const password = req.body.password

    db.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password],
    (err, result) => {
        if(err){
            res.send({err: err})
        }
            if(result.length > 0){
                res.send(result)
            }else{
                res.send({ message: "Wrong username or password!" })
            }
    })
})

app.listen(port, () => console.log(`Hippocampus listening on port 3001!`))