/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import SEO from "./seo"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ customClass, location, pageTitle, children }) => {
   
  const data = useStaticQuery(graphql`
      query siteMeta {
        allWordpressSiteMetadata {
          nodes {
            name
            description
            url
          }
        }
      }
  `)

  return (
    <>
      <SEO
        title={pageTitle || data.allWordpressSiteMetadata.nodes[0].name}
        description={data.allWordpressSiteMetadata.nodes[0].descriptio}
        pathname={data.allWordpressSiteMetadata.nodes[0].url}
      />
      <div className={customClass} >
        <Header location={location} pageTitle={pageTitle} />
            <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout