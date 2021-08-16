import React, {useState, useContext} from "react"
import {Context} from '../Context'

function Image({className, image}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite}  = useContext(Context)

    const handleHover = () => {
        setHovered(true)
    }

    const removeHover = () => {
        setHovered(false)
    }

    return (
        <div onMouseEnter={handleHover} 
             onMouseLeave={removeHover} 
             className={`${className} image-container`}>
            <img src={image.url} className="image-grid" alt={`${image.id}`} />
            {hovered ? (
                <>
                    <i onClick={() => toggleFavorite(image.id)} className="ri-heart-line favorite"></i>
                    <i className="ri-add-circle-line cart"></i>
                </>
            ) : ''}
        </div>
    )
}

export default Image
