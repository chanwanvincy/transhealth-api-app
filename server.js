const express = require('express')
let app = express()
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

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`server is listening here: http://localhost:${port}`))

app.use(sessions)
app.use(express.json())

// routes
app.use(logger)

app.use('/api/doctors', doctorsController)
app.use('/api/reviews', reviewsController)
app.use('/api/sessions', sessionsController)
app.use('/api/users', usersConstroller)

if (process.env.NODE_ENV === 'production') {
    const path = require('path')
    app.use(express.static(path.join(__dirname, 'build')));

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
}