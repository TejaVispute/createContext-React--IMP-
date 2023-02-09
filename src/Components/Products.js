import React from 'react'
import { useCart } from '../Createcontext'
const Products = () => {
    // updated value to show updated value in cart
    let { updateItem } = useCart();

    let arr = ["Mobile", "Laptops", "smartwatches"]
    return (
        <div>
            {
                arr.map((e) => (
                    <div key={e}>
                        <h1>{e}</h1>
                        <button onClick={() => updateItem((prev) => prev + 1)}>+</button>
                        <button onClick={() => updateItem((prev) => prev - 1)}>-</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products;