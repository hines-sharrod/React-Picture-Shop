import React, {useState, useEffect} from "react"
import axios from 'axios'

const Context = React.createContext()

function ContextProvider({children}) {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
      axios.get(`https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`)
        .then(res => {
          setPhotos(res.data)
        })
    }, []);

    const toggleFavorite = (id) => {
      const newPhotos = photos.map(photo => {
        if(photo.id === id) {
          return {...photo, isFavorite: !photo.isFavorite}
        } else {
          return photo
        }
      })

      setPhotos(newPhotos)
    }
    
    return (
        <Context.Provider value={{photos, toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}