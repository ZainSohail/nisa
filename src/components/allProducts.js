import React from "react"
import Slider from "react-slick";
import allProducts from "../hooks/fetchAllProducts"
import images from "../hooks/fetchImages"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default ({ children }) => {
    const products = allProducts()
    const image = images()

    return (
      <div className="container inner-content product-category">
          <h1>All Products</h1>
          <div className="row row-eq-height">
                {products.map((product) => {    
                    return (
                      <div className="col-md-4 item">
                        <div className="single-product">
                          <div className="img">
                              <div className="inner">
                                <img 
                                src={(product.node.acf.product_image) ? product.node.acf.product_image.localFile.childImageSharp.fluid.src : image.placeholderImage.childImageSharp.fluid.originalImg}
                                className={(product.node.acf.product_image) ? '' : 'placeholder'} 
                                alt="" />
                              </div>
                          </div>
                          <AniLink cover to={product.node.path} duration={1} bg="#4a107a" >
                            <h5 dangerouslySetInnerHTML={{__html: product.node.title}}/>
                          </AniLink>
                        </div>
                    </div>                        
                )
                })}
          </div>
      </div>
    ) 
}