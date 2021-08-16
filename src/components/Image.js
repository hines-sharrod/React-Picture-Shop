import React, { useState, useContext } from "react"
import { Context } from '../Context'
import PropTypes from 'prop-types'

function Image( { className, image } ) {
    const [hovered, setHovered] = useState( false )
    const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext( Context )

    const handleHover = () => {
        setHovered( true )
    }

    const removeHover = () => {
        setHovered( false )
    }

    const heartIcon = () => {
        if ( image.isFavorite ) {
            return <i onClick={() => toggleFavorite( image.id )} className="ri-heart-fill favorite"></i>
        } else if ( hovered ) {
            return <i onClick={() => toggleFavorite( image.id )} className="ri-heart-line favorite"></i>
        }
    }

    const cartIcon = () => {
        const findCartItem = cartItems.includes( image )

        if ( findCartItem ) {
            return <i onClick={() => removeFromCart( image )} className="ri-shopping-cart-fill cart"></i>
        } else if ( hovered ) {
            return <i onClick={() => addToCart( image )} className="ri-add-circle-line cart"></i>
        }
    }

    return (
        <div onMouseEnter={handleHover}
            onMouseLeave={removeHover}
            className={`${className} image-container`}>
            <img src={image.url} className="image-grid" alt={`${image.id}`} />
            {heartIcon()}
            {cartIcon()}

        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    // use .shape for objects
    image: PropTypes.shape( {
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    } )
}

export default Image
