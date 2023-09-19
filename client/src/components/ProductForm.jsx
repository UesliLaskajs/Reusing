import { useState } from "react";


const ProductForm = (prop) => {

    const { onSubmitProp,initialTitle,initialPrice,initialDescription } = prop
    const [title, setTitle] = useState(initialTitle)
    const [price, setPrice] = useState(initialPrice)
    const [description, setDescription] = useState(initialDescription)




    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ title, price, description })
    }


    return (
        <>
            <form onSubmit={submitHandler} >
                <label htmlFor="title">Title:</label>
                <input type="text"
                    placeholder="Enter Title of Product"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />


                <label htmlFor="price">Price:</label>
                <input type="number"
                    placeholder="Enter price of Product"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} />

                <label htmlFor="title">Description:</label>
                <input type="text"
                    placeholder="Describe the  Product"
                    value={description  }
                    onChange={(e) => setDescription(e.target.value)} />
                    <button>Submit</button>
            </form>

        </>
    )


}

export default ProductForm