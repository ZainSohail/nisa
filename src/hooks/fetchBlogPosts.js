import { useStaticQuery, graphql } from "gatsby"

const allBlogPosts = () => {
  const allBlogPosts = useStaticQuery(
    graphql`
        query allBlogPosts {
         allWordpressPost {
            edges {
              node {
                id
                title
                slug
                path
                excerpt
                featured_media {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 300) {
                        src
                      }
                    }
                  }
                }
            }
          }
        }
      }
    `
  )

  return allBlogPosts.allWordpressPost.edges
}

export default allBlogPosts