import { Link } from "react-router-dom"



const Details=(prop)=>{
    const {products,onClick}=prop
    console.log("🚀 ~ file: Details.jsx:7 ~ Details ~ products:", products)



    return(
        <>
        {
            products.map((item,index)=>{
                return <h3 key={index}>Product: {item.title}</h3>
            })
        }
        
        </>
    )
}

export default Details;

