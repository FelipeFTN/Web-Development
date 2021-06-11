let mysql = require('sql');

let con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "hippocampus"
});

con.connect(function(err){
	if (err) throw err;
	console.log("Connected!");
})
