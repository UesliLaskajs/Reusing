import { useEffect, useState } from "react";
import axios from "axios"
import ProductForm from "../components/ProductForm";
import Details from "../components/Details";
const Main=()=>{

    const [products,setProducts]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/products")
        .then((res)=>{
            setProducts(res.data)
        })
        .catch(()=>console.log("Error"))
    },[])

    const createProduct=(productProps)=>{
        axios.post("http://localhost:8000/products",{
            productProps    
        })
        .then((res)=>{
            setProducts([...products,res.data])
        })
        .catch(()=>console.log("Error"))
    }


    const removeProduct=(productId)=>{
        axios.delete(`http://localhost:8000/products/${productId}`)
        .then(()=>{
            setProducts(products.filter(product=>product._id !=productId))
        })
        .catch(()=>console.log("Error"))
    }

    return(
        <>
        <ProductForm onSubmitProp={createProduct} initialTitle=''  initialPrice='' initialDescription=''/>
        <Details products={products} onClick={removeProduct}/>
        
        </>
    )
}

export default Main