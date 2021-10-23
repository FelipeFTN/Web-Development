const mysql = require('mysql');

const db = mysql.createConnection({
    user    :  "root",
    host    : "localhost",
    password: "secret",
    database: "hippocampus",
})

const register = (req, res) => {
    const userEmail = req.body.userEmail
    const username = req.body.username
    const password = req.body.password

    db.query("INSERT INTO tb_user (username, password, email) VALUES (?, ?, ?)", [username, password, userEmail],
    (err, result) => {
        console.log(err)
    })
}
const login = (req, res) => {
    const userEmail = req.body.userEmail
    const password = req.body.password
    
    db.query("SELECT * FROM tb_user WHERE email = ? AND password = ?", [userEmail, password],
    (err, result) => {
        if(err){
            res.send({err: err})
        }
        if(result.length > 0){
            res.send(result)
        }else{
            res.send({ message: "Wrong email or password!" })
        }
    })
}
const getAllPosts = (req, res) => {

}
const addPost = (req, res) => {
    res.send('Boa, recebemos!')
    
}

module.exports = {register, login, getAllPosts, addPost}