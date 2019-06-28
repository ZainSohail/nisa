import { useStaticQuery, graphql } from "gatsby"

export const allProducts = () => {
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
                      product_subtitle
                    }
                  }
                }
              }
        }
    `
  )

  return allProducts.allWordpressWpProducts.edges
}