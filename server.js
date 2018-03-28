const fs = require('fs')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey('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')

const app = express()

// const index = fs.readFileSync('./public/index.html','utf8')
// const mail = fs.readFileSync('./public/mail.html','utf8')

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))

// app.get('/', (req, res) => {
// res.send(index)
// })

app.post('/cualquiera', (req, res) => {

    const msg = {
    to: req.body.email,
    from: 'alejandraRamirez@gmail.com',
    subject: 'Cambio de Squads',
    // text: `Hola, ${req.body.contenido}`,
    html: `Hola, <strong>${req.body.contenido}</strong>`,
    };

    sgMail.send(msg);
    res.end('Email enviado')
    })
      

app.listen(3000, () => {
console.log('Server')
})


