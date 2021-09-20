let express = require('express')
let app = express()

// Routes
function index(req, res){
    res.sendFile(__dirname + '/static/index.html')
}

app.get('/', index)
app.listen(3000)