const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

// you can replace this with a database:
DB_URL = "dbname=transhealth_sa_db"

// middlewares
const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

// controllers
const doctorsController = require('./controllers/doctors_controller')
const usersConstroller = require('./controllers/users_controller.js')
const sessionsController = require('./controllers/sessions_controller')
const reviewsController = require('./controllers/reviews_controller')

let app = express()

const PORT = 3001
app.listen(PORT, () => console.log(`server is listening here: http://localhost:${PORT}`))

app.use(sessions)
app.use(express.json())

// routes
app.use(logger)
app.get('/api/doctors', (req, res) => {
    res.json()
})
app.use('/api/reviews', reviewsController)
app.use('/api/sessions', sessionsController)
app.use('/api/users', usersConstroller)
