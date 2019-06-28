import React from "react"
import Slider from "react-slick";
import allProducts from "../hooks/fetchAllProducts"
import images from "../hooks/fetchImages"

export default ({ children }) => {
    const products = allProducts()
    const image = images()

    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    return (
        <section className="page-section product-category" id="products">
            <div className="container-fluid">
                <h2>Product Category</h2>
                <h3>OUR QUALITY PRODUCTS</h3>
                <div className="img">
                    <img src={image.greenWave.childImageSharp.fluid.originalImg} alt="" />
                </div>
                <div className="container">
                    <div className="product-carousel">
                        <Slider {...settings}>
                            {products.map((product) => {    
                                return (
                                     <div className="item">
                                <div className="img">
                                    <div className="inner">
                                        <img src={product.node.acf.product_image.localFile.childImageSharp.fluid.src} alt="" />
                                    </div>
                                </div>
                                <h3>{product.node.title}</h3>
                                <h4>{product.node.acf.product_subtitle}</h4>
                                <a href={product.node.path}>VIEW</a>
                            </div>                        )
                            })}
                        </Slider>
                    </div>
                </div>
                <img src={image.productFlower.childImageSharp.fluid.originalImg} alt="" className="flower" />
            </div>
        </section>
    ) 
}