require('dotenv').config()
const express = require('express'),
      ctrl = require('./controllers/mailController'),
      blogCtrl = require('./controllers/blogController')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const app = express()
app.use(express.json())

//nodemailer endpoint
app.post('/api/mail', ctrl.email)

//blog
app.get('/api/blog/:id', blogCtrl.getPosts)

app.listen(SERVER_PORT, () => console.log(`Running on port: ${SERVER_PORT}`))