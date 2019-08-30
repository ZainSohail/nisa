import React from "react"
import Slider from "react-slick";
import allProductCategories from "../hooks/fetchProductCategory"
import images from "../hooks/fetchImages"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default ({ children }) => {
    const productCategories = allProductCategories()
    const image = images()

    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
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
                <h2>Product Categories</h2>
                <h3>OUR QUALITY PRODUCTS</h3>
                <div className="img">
                    <img src={image.greenWave.childImageSharp.fluid.originalImg} alt="" />
                </div>
                <div className="container">
                    <div className="row row-eq-height">
                        {productCategories.map((category) => {   
                            return (
                              <div className="col-sm-12 col-md-4 item">
                                  <div className="img">
                                    <div className="inner">
                                      <img 
                                      src={(category.acf) ? category.acf.category_image.localFile.childImageSharp.fluid.src : image.placeholderImage.childImageSharp.fluid.originalImg}
                                      className={(category.acf) ? '' : 'placeholder'} 
                                      alt="" />
                                    </div>
                                </div>
                                <h3 dangerouslySetInnerHTML={{__html: category.name}}/>
                                <AniLink cover to={category.path} duration={1} bg="#4a107a" >
                                  VIEW
                                </AniLink>
                              </div>                        
                        )
                        })}
                    </div>
                    <AniLink cover to="/all-products" duration={1} bg="#4a107a" >
                      VIEW ALL PRODUCTS
                    </AniLink>
                </div>
                <img src={image.productFlower.childImageSharp.fluid.originalImg} alt="" className="flower" />
            </div>
        </section>
    ) 
}