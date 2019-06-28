import {React, Component} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

class ProductTemplate extends Component {
    render() {
        const siteMetadata = this.props.data.site.siteMetadata
        const currentPage = this.props.data.wordpressWpProducts
        
        this.props.data.site.siteMetadata.title = siteMetadata.title;

        return (
          <Layout>            
            <div className="container inner-content">
                <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
                <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>
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
            id
            date(formatString: "MMMM DD, YYYY")
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