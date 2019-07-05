import { useStaticQuery, graphql } from "gatsby"

const allProducts = () => {
  const allProducts = useStaticQuery(
    graphql`
        query allProducts {
           allWordpressWpProducts {
                edges {
                  node {
                    id
                    title
                    slug
                    path,
                    acf {
                      product_image {
                        localFile {
                          childImageSharp {
                            fluid(maxWidth: 300) {
                              src
                            }
                          }
                        }
                      }
                      product_sizes
                    }
                  }
                }
              }
        }
    `
  )

  return allProducts.allWordpressWpProducts.edges
}

export default allProducts