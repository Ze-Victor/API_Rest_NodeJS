const express = require('express')
const router = express.Router()
const productMid = require('../middlewares/product.middleware')

router.post('/', productMid)

router.get('/', (request, response) => {
  response.send({ message: "Hi, i'm router product GET!" })
})

router.post('/', (request, response) => {
  return response.send({
    message: 'Produto inserido com sucesso!',
  })
})


module.exports = router