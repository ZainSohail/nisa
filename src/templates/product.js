import {React, Component} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

class ProductTemplate extends Component {
    render() {
        const currentPage = this.props.data.wordpressWpProducts

        return (
          <Layout location={this.props.location} pageTitle={currentPage.title} >            
            <div className="container inner-content">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="product-image">
                            <div class="frame">
                                <div class="inner">
                                    <img src={currentPage.acf.product_image.localFile.childImageSharp.fluid.src} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <h1 className="product-title" dangerouslySetInnerHTML={{__html: currentPage.title}}/>
                        <div className="product-description" dangerouslySetInnerHTML={{__html: currentPage.content}}/>
                        <div className="product-features">
                            <h2> PRODUCT FEATURES </h2>
                            <p dangerouslySetInnerHTML={{__html: currentPage.acf.product_features}} />
                        </div>


                    </div>
                </div>
            </div>
          </Layout>
        )
    }
}


export default ProductTemplate

export const productQuery = graphql`
    query currentProductQuery($id: String!) {
        wordpressWpProducts(id: { eq: $id }) {
            title
            content
            slug
            acf {
                product_features
                product_subtitle
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
        },
        site {
            id
            siteMetadata {
                title
                subtitle
            }
        }
    }
`