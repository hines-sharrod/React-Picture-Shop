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
    
    return (
        <Context.Provider value={photos}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}