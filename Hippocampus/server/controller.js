const mysql = require('mysql');
const formidable = require('formidable');
const fs = require('fs');


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
const addPost = (req, res, next) => {
    const form = formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
      if (err) {
        next(err);
        return;
    }
    res.json({fields, files})
      var oldpath = files.someExpressFiles.path;
      var newpath = '/Users/ftenorio/Desktop/Web-Design/Hippocampus/server/images/' + files.someExpressFiles.name;
      fs.writeFileSync(newpath, fs.readFileSync(oldpath))
  });
}
module.exports = {register, login, getAllPosts, addPost}