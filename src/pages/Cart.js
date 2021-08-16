import React, { useContext, useState } from "react"
import { Context } from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const { cartItems, emptyCart } = useContext( Context )
    const [orderButtonText, setOrderButtonText] = useState( 'Place Order' )

    const cartItemElements = cartItems.map( item => (
        <CartItem key={item.id} item={item} />
    ) )

    const cartTotal = ( cartItems.length * 5.99 ).toLocaleString( 'en-US', {
        style: 'currency',
        currency: 'USD'
    } )

    const placeOrder = () => {
        setOrderButtonText( 'Ordering....' )
        setTimeout( () => {
            console.log( 'Placed Order' )
            setOrderButtonText( 'Place Order' )
            emptyCart()
        }, 3000 )
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {cartTotal}</p>
            <div className="order-button">
                {cartItems.length > 0 &&
                    <button onClick={placeOrder}>{orderButtonText}</button>
                }
            </div>
        </main>
    )
}

export default Cart