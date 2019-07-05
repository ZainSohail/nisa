import React from "react"
import wpHeroSlides from "../hooks/fetchHeroSlides"
import images from "../hooks/fetchImages"
import Slider from "react-slick";

export default ({ children }) => {
    const slides = wpHeroSlides()
    const image = images()

    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
        <section className="page-section main-carousel-content" id="home">
            <div className="main-carousel">
                <Slider {...settings}>
                    {slides.map((slide) => { 
                        return (
                            <div className="item" style={{backgroundImage: "url(" + slide.background_image.localFile.childImageSharp.fluid.srcWebp + ")"}}>
                                <div className="container">
                                    <div className="one">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6">
                                                <div className="half desc">
                                                    <div className="content">
                                                        <h3>{slide.subtitle}</h3>
                                                        <h2>{slide.title}</h2>
                                                        <a href={slide.hero_slider_button_link}> {slide.hero_slider_button_label}</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-md-6">
                                                <div className="half img">
                                                    <img src={slide.slider_image.localFile.childImageSharp.fluid.srcWebp} alt="" /> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
            <img src={image.wave.childImageSharp.fluid.srcWebp}  alt="Wave" className="wave" />
            <a href="#about" className="go-down"> <span><img src={image.angle.childImageSharp.fluid.srcWebp} alt="" /></span> </a>
        </section>
    ) 
}