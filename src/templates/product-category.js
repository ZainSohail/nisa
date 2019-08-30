import {React, Component} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

class PageTemplate extends Component {
    render() {
        const currentPage = this.props.data.allWordpressWpProducts.nodes
        const currentCategory = this.props.data.allWordpressWpProductCategory.nodes[0]
        return (
            <Layout location={this.props.location} pageTitle={currentCategory.name}>
                <div className="container inner-content">
                    <h1 dangerouslySetInnerHTML={{__html: currentCategory.name}}/>
                    <p>{currentCategory.description}</p>
                    <div className="row row-eq-height">
                        {currentPage.map((product) => { 
                            return (
                                <div className="col-sm-12 col-md-4">
                                    <div className="single-product">
                                        <a className="single-product-link" href={product.path}>
                                        <img 
                                          src={(product.acf.product_image) ? product.acf.product_image.localFile.childImageSharp.fluid.src : ''}
                                          className={(product.acf.product_image) ? '' : 'placeholder'} 
                                          alt="" />
                                        <h5> {product.title} </h5>
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
    query allCategoryProducts($name: String) {
        allWordpressWpProducts(filter: {product_category: {elemMatch: {name: {eq: $name}}}}) {
            nodes {
                title
                slug
                path
                acf {
                    product_image {
                        localFile {
                            childImageSharp {
                                fluid {
                                    src
                                }
                            }
                        }
                    }
                }
            }
        }
        allWordpressWpProductCategory(filter: {name: {eq: $name}}) {
            nodes {
              name
              description
              acf {
                category_image {
                  localFile {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
              }
            }
        }
        placeholderImage: file(relativePath: { eq: "placeholder.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              originalImg,
              srcWebp
            }
          }
        }
    }
`