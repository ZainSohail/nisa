import {React, Component} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

class PageTemplate extends Component {

    render() {
        const currentPage = this.props.data.wordpressPage

        return (
          <Layout location={this.props.location} pageTitle={currentPage.title} >         
            <div className={this.props.transitionStatus + ' container inner-content'}>
                <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
                <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>
            </div>
          </Layout>
        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            slug
            id
            date(formatString: "MMMM DD, YYYY")
        }
        site {
            id
            siteMetadata {
                title
                subtitle
            }
        }
    }
`