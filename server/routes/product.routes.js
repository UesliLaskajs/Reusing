const ProductCotroller=require("../controllers/Product.controller")

module.exports=(app)=>{
    app.get('/products',ProductCotroller.getAllProducts)
    app.post('/products',ProductCotroller.createProducts)
    app.patch('/products/:id',ProductCotroller.updateProducts)
    app.delete('/products/:id',ProductCotroller.deleteProducts)
}