import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "./ProductForm";

const Update=()=>{

    const {id}=useParams();
    const [product,setProduct]=useState=({})
    useEffect(()=>{
        axios.get(`http://localhost:8000/products${id}`)
        .then((selectedProduct)=>{
            setProduct(selectedProduct);
        })
        .catch((err)=>res.json("error getting data",err))
    })

    const updateProduct=(personParam)=>{
        axios.patch(`http://localhost:8000/products${id}`,{
        personParam
        })
    }
    return (
        <div>
            <h1>Update a Person</h1>
            <ProductForm onSubmitProp={updateProduct} initialTitle={product.title}
            initialPrice={product.price} initialDescription={product.description}
            />
        </div>
    )
}

export default Update;