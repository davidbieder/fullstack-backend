let express = require('express')
let logger = require('morgan')
let cors = require('cors')

let indexRouter = require('./routes/index')
let usersRouter = require('./routes/users')

let app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/', indexRouter)
app.use('/users', usersRouter)

module.exports = app
