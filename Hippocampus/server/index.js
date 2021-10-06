const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()
const port = 3001
app.use(express.json())
app.use(cors())

app.post('/register', routes.register)

app.post('/login', routes.login)

app.listen(port, () => console.log('Hippocampus listening on port ' + port + '!'))