require('dotenv').config()
const express = require('express'),
      ctrl = require('./controllers/mailController'),
      massive = require('massive')
const {SERVER_PORT} = process.env
const app = express()
app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then((db) => {
    app.set('db', db)
    console.log('db connected')
})

//nodemailer endpoint
app.post('/api/email', ctrl.email)


app.listen(SERVER_PORT, () => console.log(`Running on port: ${SERVER_PORT}`))