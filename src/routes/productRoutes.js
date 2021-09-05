const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
  response.send({ message: "Hi, i'm router product GET!" })
})

router.post('/', (request, response) => {
  response.send({ message: "Hi, i'm router product POST!" })
})

router.get('/:id_produto', (request, response) => {
  const id = request.params.id_produto
  response.send({
    message: "Usando o GET product de um produto específico!",
    id: id
  })
})

router.patch('/', (request, response) => {
  response.send({ message: "Hi, i'm router product PATCH!" })
})

router.delete('/', (request, response) => {
  response.send({ message: "Hi, i'm router product DELETE!" })
})

module.exports = router