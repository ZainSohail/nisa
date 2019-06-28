import React from "react"
import { wpHeroSlides } from "../hooks/fetchHeroSlides"
import { images } from "../hooks/fetchImages"
import Slider from "react-slick";

const HomeAbout = () => {
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
        <section className="page-section about-nisa" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="half img">
                            <img src={image.aboutNisa.childImageSharp.fluid.originalImg} alt="" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="half desc">
                            <h2>About Nisa</h2>
                            <h3>Who we are</h3>
                            <img src={image.greenWave.childImageSharp.fluid.originalImg} alt="" className="wave" />
                            <p className="bold">Our group is a family company and is engaged in diversified fields of marketing, distribution and manufacturing. We have two major companies one is engaged in distribution business S.M.Bashir ncies and Trend International engaged in production and marketing of cosmetics.</p>
                            <p className="sick">We are always eager to have new and challenging assignments as we have all expertise regarding management, human resource, ware housing and adequate finance to cope any new assignment.</p>
                            <a href="">READ MORE</a>
                        </div>
                    </div>
                </div>
            </div>
            <img src={image.aboutNisaLeftLeaf.childImageSharp.fluid.originalImg} alt="" className="left-img" />
            <img src={image.aboutNisaRightLeaf.childImageSharp.fluid.originalImg} alt="" className="right-img" />
        </section>
    ) 
}

export default HomeAbout;