require('dotenv').config()
const ctrl = require('./controllers/mailController'),
    //   blogCtrl = require('./controllers/blogController')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

//nodemailer endpoint
app.post('/api/mail', ctrl.email)

app.listen(SERVER_PORT, () => console.log(`Running on port: ${SERVER_PORT}`))