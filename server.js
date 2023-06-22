const express = require('express')
require('dotenv').config();

// you can replace this with a database:
DB_URL = "dbname=transhealth_sa_db"

// middlewares
const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

// controllers
const docsController = require('./controllers/docs_controller')
const usersConstroller = require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')
const reviewsController = require('./controllers/reviews_controller')

let app = express()

const PORT = 3001
app.listen(PORT, () => console.log(`server is listening here: http://localhost:${PORT}`))

app.use(sessions)
app.use(express.json())

// routes
app.use(logger)
app.use('/api/docs', docsController)
app.use('/api/reviews', reviewsController)
app.use('/api/sessions', sessionsController)
app.use('/api/users', usersConstroller)
