import {React, Component} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ProductImage from "../components/productImage"
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from 'react-share';

import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';

class ProductTemplate extends Component {

    render() {
        const currentPage = this.props.data.wordpressWpProducts
        return (
          <Layout location={this.props.location} pageTitle={currentPage.title} >            
            <div className="container inner-content">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <ProductImage productImage={currentPage.acf.product_image} />
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <h1 className="product-title" dangerouslySetInnerHTML={{__html: currentPage.title}}/>
                        <div className="product-description" dangerouslySetInnerHTML={{__html: currentPage.content}}/>
                        <div className="product-features">
                            <h2> PRODUCT WEIGHT & SIZES </h2>
                            <p dangerouslySetInnerHTML={{__html: ( currentPage.acf.product_sizes ) ? currentPage.acf.product_sizes : ''}} />
                        </div>

                        <div className="product-features">
                            <h2> SHARE THIS PRODUCT ON: </h2>
                            <ul className="socialmedia-share">
                                <li> 
                                    <FacebookShareButton
                                    url={this.props.location.href}
                                    title={currentPage.title}
                                    description={currentPage.content}
                                    image={currentPage.acf.product_image}
                                    className="Demo__some-network__share-button">
                                        <FaFacebookF className="social-icon" />
                                    </FacebookShareButton>
                                </li>
                                <li> 
                                    <TwitterShareButton
                                        url={this.props.location.href}
                                        title={currentPage.title}
                                        description={currentPage.content}
                                        image={currentPage.acf.product_image}
                                        className="Demo__some-network__share-button">
                                        <FaTwitter className="social-icon" /> 
                                    </TwitterShareButton>
                                </li>
                                <li> 
                                    <WhatsappShareButton
                                        url={this.props.location.href}
                                        title={currentPage.title}
                                        description={currentPage.content}
                                        image={currentPage.acf.product_image}
                                        className="Demo__some-network__share-button">
                                        <FaWhatsapp className="social-icon" /> 
                                    </WhatsappShareButton>
                                </li>
                            </ul>
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
                product_sizes
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