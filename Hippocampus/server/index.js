const express = require('express')
const cors = require('cors')
const controller = require('./controller')

const app = express()
const port = 3001
app.use(express.json())
app.use(cors())

app.post('/register', controller.register)
app.post('/login', controller.login)
app.post('/post', controller.addPost)
app.get('/posts', controller.getAllPosts)

app.listen(port, () => console.log('Hippocampus listening on port ' + port + '!'))