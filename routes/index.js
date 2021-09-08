
// import all Controllers here
const { Router } = require('express');
const apiRouter = Router();
const customerRouter = require('./customerRouter')
const employeRouter = require('./employeRouter')
const categoryRouter = require('./categoryRouter')
const productRouter = require('./productRouter')
const supplierRouter = require('./supplierRouter')
const authRouter = require('./authRouter')

// Set Initial Router and Hit that Countroler at particular route
apiRouter.use('/customer', customerRouter)
apiRouter.use('/employe', employeRouter)
apiRouter.use('/category', categoryRouter)
apiRouter.use('/product', productRouter)
apiRouter.use('/supplier', supplierRouter)
apiRouter.use('/auth', authRouter)





module.exports = apiRouter