const Product = require('../modals/productModal')
const asyncHandler = require('express-async-handler')


//-----------------GET-ALL DATA FROM DATABASE-----------------//
const getProducts = asyncHandler(async(req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }})

//-----------------GET-ALL DATA FROM DATABASE BY ID-----------------//
const getProductById = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }})

//-----------------POST-SAVE DATA TO DATABASE-----------------//
const createProduct = asyncHandler(async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }})



//-----------------UPDATE DATA FROM DATABASE-----------------//
const updateProduct =  asyncHandler(async(req, res) => {
    try {
       const {id} = req.params
       const product = await Product.findByIdAndUpdate(id, req.body)
       //We cannot find data in database
        if(!product){
            res.status(404)
            throw new Error(`Cannot find any product with the id ${id}`)
        }
        const updated = await Product.findById(id)
        res.status(200).json(updated)

    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})  


//-----------------DELETE DATA FROM DATABASE-----------------//
const deleteProduct =  asyncHandler(async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        //We cannot find data in database
        if(!product){
            return res.status(404).json(`Product with id ${id} not found`)
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})       

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}
