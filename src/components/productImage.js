import React from "react"
import images from "../hooks/fetchImages"

export default ({ productImage }) => {
    const image = images()

    console.log(productImage);

    return (
        <div className="product-image">
            <div className="frame">
                <div className="inner">
                    <img src={(productImage) ? productImage.localFile.childImageSharp.fluid.src : image.placeholderImage.childImageSharp.fluid.originalImg} alt="" />
                </div>
            </div>
        </div>
    ) 
}