const express = require('express')
const router = express.Router()
const productMid = require('../middlewares/product.middleware')
const knex = require('../database/index')

router.post('/', productMid)
router.put('/', productMid)

router.get('/', async (request, response) => {

  const user = await knex('product').select('*')
  response.status(200).json({ user })
})

router.post('/', async (request, response) => {

  await knex('product')
    .insert(request.body);

  return response.send({
    msg: 'Produto inserido'
  })
})

router.delete('/', async (request, response) => {

  const id = request.query.id

  await knex('product')
    .where('id', id)
    .del()

  return response.send({
    msg: 'Produto deletado'
  })
})

router.patch('/', async (request, response) => {

  const id = request.query.id
  const nome = request.query.nome

  await knex('product')
    .where('id', id)
    .update('nome', nome)

  return response.send({
    msg: 'Nome alterado'
  })

})

router.put('/', async (request, response) => {

  const id = request.query.id
  const {
    nome,
    preco
  } = request.body

  await knex('product')
    .where('id', id)
    .update({
      'nome': nome,
      'preco': preco
    })

  return response.send({
    msg: 'Produto alterado'
  })

})


module.exports = router