import { useStaticQuery, graphql } from "gatsby"

export const allBlogPosts = () => {
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
                content
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