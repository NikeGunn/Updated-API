const express = require('express')
const router = express.Router()
const producrController = require('../controllers/productController')
const {getProducts, getProductById, createProduct, updateProduct, deleteProduct} = producrController


//-----------------GET-ALL DATA FROM DATABASE-----------------//
router.get('/', getProducts )

//-----------------GET-ALL DATA FROM DATABASE BY ID-----------------//
router.get('/:id', getProductById)    

//-----------------POST-SAVE DATA TO DATABASE-----------------//    
router.post('/', createProduct)

//-----------------UPDATE DATA FROM DATABASE-----------------//
router.put('/:id', updateProduct)

//-----------------DELETE DATA FROM DATABASE-----------------//

router.delete('/:id', deleteProduct)


module.exports = router