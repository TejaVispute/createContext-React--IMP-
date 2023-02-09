import React from 'react'
import { useCart } from '../Createcontext'

function Cart() {
    // used items state value here for incrementing cart item
    let { item, updateItem } = useCart();
    // console.log(item)
    if (item < 1) {
        updateItem(0)
    }

    return (
        <div>Cart : {item}</div>
    )
}

export default Cart