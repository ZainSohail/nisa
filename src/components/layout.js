/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
   
  const data = useStaticQuery(graphql`
      query siteMeta {
        allWordpressSiteMetadata {
          nodes {
            name
            description
            url
          }
          pageInfo {
            currentPage
          }
        }
      }
  `)

  return (
    <>
      <Helmet>
          <title>{data.allWordpressSiteMetadata.nodes[0].name}</title>
          <meta name="description" content={data.allWordpressSiteMetadata.nodes[0].description} />
          <link rel="canonical" href={data.allWordpressSiteMetadata.nodes[0].url} />

          {/* OpenGraph tags */}
          <meta property="og:url" content={data.allWordpressSiteMetadata.nodes[0].url} />
          <meta property="og:title" content={data.allWordpressSiteMetadata.nodes[0].name} />
          <meta property="og:description" content={data.allWordpressSiteMetadata.nodes[0].description} />
          
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={data.allWordpressSiteMetadata.nodes[0].name} />
          <meta name="twitter:description" content={data.allWordpressSiteMetadata.nodes[0].description} />
      </Helmet>
      <Header/>
        <div>
          <main>{children}</main>
        </div>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout