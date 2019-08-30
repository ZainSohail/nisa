import React from "react"
import Layout from "../components/layout"
import AllProducts from "../components/allProducts"

const IndexPage = ({location}) => {
    return (        
      <Layout location={location} pageTitle={'All Products'} crumbLabel="All Products">
        <AllProducts />
      </Layout>
    )
}

export default IndexPage

