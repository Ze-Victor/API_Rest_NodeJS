const express = require('express')
const router = express.Router()
const productMid = require('../middlewares/product.middleware')
const knex = require('../database/index')

const ProductControllers = require('../controllers/productControllers')

router.post('/', productMid)
router.put('/', productMid)

const productControllers = new ProductControllers()

router.get('/', productControllers.index)

router.post('/', productControllers.create)

router.delete('/', productControllers.delete)

router.patch('/', productControllers.updatePatch)

router.put('/', productControllers.updatePut)


module.exports = router