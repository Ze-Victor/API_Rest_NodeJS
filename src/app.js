const express = require('express')
const app = express()
const morgan = require('morgan')

const productRoutes = require('./routes/productRoutes')
const requestProductRoutes = require('./routes/requestProductRoutes')

app.use(morgan('dev'))

app.use('/product', productRoutes)
app.use('/requestProduct', requestProductRoutes)

app.use((request, response, next) => {
  const erro = new Error("Não encontrado!")
  erro.status = 404
  next(erro)
})

app.use((error, request, response, next) => {
  response.status(error.status || 500).send({
    erro: {
      message: error.message
    }
  })
})

module.exports = app;