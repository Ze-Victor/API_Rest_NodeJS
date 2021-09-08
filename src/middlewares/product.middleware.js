const Ajv = require('ajv')
const ajv = new Ajv()

const productSchema = require('../database/schemas/schema.product')

function validateProduct(request, response, next) {

  const product = request.body

  //VALIDAR
  const validate = ajv.compile(productSchema)
  const valid = validate(product)

  if (valid) {
    next()
  } else {
    return response.status(400).send({
      error: validate.errors
    })
  }
}

module.exports = validateProduct