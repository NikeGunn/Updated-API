// Purpose: Main file for the server
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes')
const errorMiddleware = require('./middleware/errorMiddleware')
var cors = require('cors')


const PORT = process.env.PORT || 5000


//-----------------ENVIRONMENT VARIABLES-----------------//
const MONGODB_URL = process.env.MONGODB_URL


//-----------------MIDDLEWARE-----------------//
app.use(express.json())
app.use(express.urlencoded( { extended: true }) )
app.use(cors())


//-----------------ROUTES-----------------//
app.use('/api/products', productRoutes)


//-----------------CHECKING | DISPLAYING ERROR -----------------//
app.get('/',  (req, res)=> {
    throw new Error('Something went wrong')
})


//-----------------ERROR MIDDLEWARE-----------------//
app.use(errorMiddleware)





//-----------------CONNECT TO DATABASE-----------------//
mongoose.
connect(MONGODB_URL)
.then(() => {
    console.log('Connected to MongoDB...')
    app.listen(PORT, () => {
        console.log(`Listening on PORT ${PORT}...`)
      });
})
.catch((error) => 
    console.log(error))
