import React from "react"
import Layout from "../components/layout"
import HeroSlider from "../components/heroSlider"
import HomeAbout from "../components/homeAbout"
import HomeProducts from "../components/homeProducts"
import HomeProductCategory from "../components/homeProductCategory"
import HomeBlog from "../components/homeBlog"
import HomeSubscribe from "../components/homeSubscribe"

const IndexPage = ({location}) => {
    return (        
      <Layout customClass="home" location={location} pageTitle={'Home'} crumbLabel="Home">
        <HeroSlider />
        <HomeAbout />
        <HomeProductCategory />
        <HomeBlog />
        <HomeSubscribe />
      </Layout>
    )
}

export default IndexPage

