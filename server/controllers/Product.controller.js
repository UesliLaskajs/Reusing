const Product=require("../models/product.model")

module.exports.getAllProducts=(req,res)=>{
    Product.find()
    .then((allProducts)=>{
        res.json(allProducts)
    })
    .catch((err)=>res.json('Error getting all Products',err))
}

module.exports.createProducts=(req,res)=>{
    Product.create(req.body)
    .then((createdProduct)=>{
        res.json(createdProduct)
    })
    .catch((err)=>res.json('Error creating  Products',err))
}

module.exports.updateProducts=(req,res)=>{
    Product.updateOne({_id:req.params.id},req.body,{new:true})
    .then((updatedProudct)=>res.json(updatedProudct))
    .catch((err)=>{console.log("error",err)})
}

module.exports.deleteProducts=(req,res)=>{
    Product.deleteOne({_id:req.params.id})
    .then((deletedProduct)=>{
        res.json(deletedProduct)
    })
    .catch((err)=>{console.log("error",err)})
}