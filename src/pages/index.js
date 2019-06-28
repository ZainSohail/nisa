import React from "react"
import Layout from "../components/layout"
import HeroSlider from "../components/HeroSlider"
import HomeAbout from "../components/homeAbout"
import HomeProducts from "../components/homeProducts"
import HomeBlog from "../components/homeBlog"
import HomeSubscribe from "../components/homeSubscribe"

const IndexPage = () => {
    return (        
      <Layout>
        <HeroSlider />
        <HomeAbout />
        <HomeProducts />
        <HomeBlog />
        <HomeSubscribe />
      </Layout>
    )
}

export default IndexPage

