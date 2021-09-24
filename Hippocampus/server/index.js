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
    password: "hippocampus",
    database: "hippocampus",
})

app.post('/register', (req, res) =>{

    const userEmail = req.body.userEmail
    const username = req.body.username
    const password = req.body.password

    db.query("INSERT INTO users (user_name, user_password, salt_password, user_email) VALUES (?, ?, ?, ?)", [username, password, salt, userEmail],
    (err, result) => {
        console.log(err)
    })
})

app.listen(port, () => console.log(`Hippocampus listening on port 3001!`))