import React from "react"
import { allProducts } from "../hooks/fetchAllProducts"
import { images } from "../hooks/fetchImages"
import Slider from "react-slick";

const HomeProducts = () => {
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
        <section class="page-section product-category" id="products">
            <div class="container-fluid">
                <h2>Product Category</h2>
                <h3>OUR QUALITY PRODUCTS</h3>
                <div class="img">
                    <img src={image.greenWave.childImageSharp.fluid.originalImg} alt="" />
                </div>
                <div class="container">
                    <div class="product-carousel">
                        <Slider {...settings}>
                            {products.map((product) => {    
                                return (
                                     <div class="item">
                                <div class="img">
                                    <div class="inner">
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
                <img src={image.productFlower.childImageSharp.fluid.originalImg} alt="" class="flower" />
            </div>
        </section>
    ) 
}

export default HomeProducts;