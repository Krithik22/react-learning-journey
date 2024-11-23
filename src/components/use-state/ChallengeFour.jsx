import React, { useState } from 'react'

const ChallengeFour = () => {

    const [cartItems, setCartItems] = useState([])
    const [item, setItem] = useState({})

    const [itemName, setItemName] = useState("")
    const [itemQuantity, setItemQuantity] = useState("")


    const handleItemNameChange = (e) => {
        setItemName(e.target.value)
    }

    const handleItemQuantityChange = (e) => {
        setItemQuantity(e.target.value)
    }

    const addToCart = () => {
        setCartItems([...cartItems, {name: itemName, quantity: itemQuantity}])
        setItemName("")
        setItemQuantity("")
    }

  return (
    <div>
        <label htmlFor="name">Item Name:</label>
        <input type="text" name='name' value={itemName} onChange={handleItemNameChange}/>
        <label htmlFor="quantity">Item Quantity</label>
        <input type="text" name='quantity' value={itemQuantity} onChange={handleItemQuantityChange}/>
        <button onClick={addToCart} >Add to Cart</button>
        <h2>Cart Items</h2>
        {/* {
            cartItems.length !== 0 ? (
                cartItems.map(item => {
                    return 
                        <>
                        <p>Name: {item.name}</p>
                        <p>Quantity: {item.quantity} </p>
                        </>
                    
                }):(
                    <h2>Your Cart is Empty</h2>
                )
            )
        } */}

        {
            cartItems.length !== 0 ?  
            cartItems.map(item => {
                return (
                    <ul key={Math.random()}>
                        <li>Name: {item.name}</li>
                        <li>Quantity: {item.quantity} </li>
                    </ul>
            )}) : <h3>Your cart is Empty</h3>
        }
    </div>
  )
}

export default ChallengeFour