import React, { useState, useEffect } from "react"
import axios from 'axios'

const Context = React.createContext()

function ContextProvider( { children } ) {
  const [photos, setPhotos] = useState( [] )
  const [cartItems, setCartitems] = useState( [] )

  useEffect( () => {
    axios.get( `https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json` )
      .then( res => {
        setPhotos( res.data )
      } )
  }, [] );

  const toggleFavorite = id => {
    const newPhotos = photos.map( photo => {
      if ( photo.id === id ) {
        return { ...photo, isFavorite: !photo.isFavorite }
      } else {
        return photo
      }
    } )

    setPhotos( newPhotos )
  }

  const addToCart = image => {
    setCartitems( prevCartItems => [...prevCartItems, image] )
  }

  const removeFromCart = image => {
    setCartitems( prevCartItems => prevCartItems.filter( item => {
      return item.id !== image.id
    } ) )
  }

  console.log( cartItems )

  return (
    <Context.Provider value={{
      photos,
      toggleFavorite,
      addToCart,
      cartItems,
      removeFromCart
    }}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }