import { useStaticQuery, graphql } from "gatsby"

const wpOptions = () => {
  const wpOptions = useStaticQuery(
    graphql`
      query wpOptions {
          wordpressWpOptions {
            id,
            message,
            success,
            data {
              logo {
                localFile {
                  childImageSharp {
                      fluid(maxWidth: 180) {
                        src,
                        srcWebp
                      }
                    }
                }
              }
              phone,
              email,
              address,
              copyrights,
              facebook_handle,
              instagram_handle
            }
          }
        }
    `
  )

  return wpOptions.wordpressWpOptions.data
}

export default wpOptions