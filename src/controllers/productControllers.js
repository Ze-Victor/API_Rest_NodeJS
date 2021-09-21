const knex = require('../database/index')

class ProductControllers {
  async create(request, response) {

    await knex('product')
      .insert(request.body);

    return response.send({
      msg: 'Produto inserido'
    })
  }

  async index(request, response) {

    const user = await knex('product').select('*')
    response.status(200).json({ user })
  }

  async delete(request, response) {

    const id = request.query.id

    const deleteItem = await knex('product')
      .where('id', id)
      .del();


    if (deleteItem) {
      return response.send({ msg: 'Produto deletado' })
    } else {
      return response.send({ msg: 'Produto não encontrado' })
    }
  }

  async updatePatch(request, response) {

    const id = request.query.id
    const nome = request.query.nome

    const update = await knex('product')
      .where('id', id)
      .update('nome', nome)
    if (update === 1) {
      return response.send({ msg: 'Nome alterado' })
    } else {
      return response.send({ msg: 'Produto não encontrado' })
    }
  }

  async updatePut(request, response) {

    const id = request.query.id
    const {
      codigo,
      nome,
      preco
    } = request.body

    const update = await knex('product')
      .where('id', id).update({
        'codigo': codigo,
        'nome': nome,
        'preco': preco
      })

    if (update === 1) {
      return response.send({ msg: 'Produto alterado' })
    } else {
      return response.send({ msg: 'Produto não encontrado' })
    }

  }

}

module.exports = ProductControllers