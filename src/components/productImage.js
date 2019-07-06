import React from "react"
import images from "../hooks/fetchImages"

export default ({ productImage }) => {
    const image = images()

    return (
        <div className="product-image">
            <div className="frame">
                <div className="inner">
                    <img 
                    src={(productImage) ? productImage.localFile.childImageSharp.fluid.src : image.placeholderImage.childImageSharp.fluid.originalImg} 
                    className={(productImage) ? '' : 'placeholder'} 
                    alt="" 
                    />
                </div>
            </div>
        </div>
    ) 
}