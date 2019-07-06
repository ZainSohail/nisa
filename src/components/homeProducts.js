import React from "react"
import Slider from "react-slick";
import allProducts from "../hooks/fetchAllProducts"
import images from "../hooks/fetchImages"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default ({ children }) => {
    const products = allProducts()
    const image = images()

    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1008,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]

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
                                      <img 
                                      src={(product.node.acf.product_image) ? product.node.acf.product_image.localFile.childImageSharp.fluid.src : image.placeholderImage.childImageSharp.fluid.originalImg}
                                      className={(product.node.acf.product_image) ? '' : 'placeholder'} 
                                      alt="" />
                                    </div>
                                </div>
                                <h3 dangerouslySetInnerHTML={{__html: product.node.title}}/>
                                <AniLink cover to={product.node.path} duration={1} bg="#4a107a" >
                                  VIEW
                                </AniLink>
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