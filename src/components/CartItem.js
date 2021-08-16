import React, { useContext, useState } from "react"
import { Context } from "../Context"

const CartItem = ( { item } ) => {
  const { removeFromCart } = useContext( Context )
  const [hovered, setHovered] = useState( false )

  const handleHover = () => {
    setHovered( true )
  }

  const removeHover = () => {
    setHovered( false )
  }

  return (
    <div className="cart-item">
      <i onClick={() => removeFromCart( item )}
        className={hovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'}
        onMouseEnter={handleHover}
        onMouseLeave={removeHover}></i>
      <img src={item.url} width="130px" alt={item.id} />
      <p>$5.99</p>
    </div>
  )
}

export default CartItem