const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
  response.send({ message: "Hi, i'm router requestProduct GET!" })
})

router.post('/', (request, response) => {
  response.send({ message: "Hi, i'm router requestProduct POST!" })
})

router.get('/:id_pedido', (request, response) => {
  const id = request.params.id_produto
  response.send({
    message: "Usando o requestProduct GET de um produto específico!",
    id: id
  })
})

router.patch('/', (request, response) => {
  response.send({ message: "Hi, i'm router requestProduct PATCH!" })
})

router.delete('/', (request, response) => {
  response.send({ message: "Hi, i'm router requestProduct DELETE!" })
})

module.exports = router