const express = require('express')
const app = express()
const morgan = require('morgan')

const productRoutes = require('./routes/productRoutes')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((request, response, next) => {
  response.header('Acess-Control-Allow-Origin', '*'),
    response.header(
      'Acess-Control-Allow-Header',
      'Origin,X-Requested-With, Accept, Authorization, Content-Type'
    )
  if (request.header = 'OPTIONS') {
    response.header('Acess-Control-Allow-Methods', 'PUT, PATCH, DELETE, POST, GET')
  }

  next()

})

app.use('/product', productRoutes)

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