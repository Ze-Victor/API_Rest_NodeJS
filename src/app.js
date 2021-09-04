const express = require('express')
const app = express()

app.use('/', (request, response) => {
  response.json({
    message: "OI, CARALHO"
  })
})

module.exports = app;