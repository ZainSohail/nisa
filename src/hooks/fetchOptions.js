import { useStaticQuery, graphql } from "gatsby"

export const wpOptions = () => {
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
                        src
                      }
                    }
                }
              }
              phone,
              email,
              address,
              copyrights
            }
          }
        }
    `
  )

  return wpOptions.wordpressWpOptions.data
}