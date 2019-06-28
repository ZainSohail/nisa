import { useStaticQuery, graphql } from "gatsby"

export const wpHeroSlides = () => {
  const wpHeroSlides = useStaticQuery(
    graphql`
      query wpHeroSlides {
          wordpressWpSlides {
              message,
              success,
              data {
                slide_id,
                title,
                subtitle,
                hero_slider_button_link,
                hero_slider_button_label,
                background_image {
                  localFile {
                    childImageSharp {
                        fluid(maxWidth: 1800) {
                          src
                        }
                      }
                  }
                }
                slider_image {
                  localFile {
                    childImageSharp {
                        fluid(maxWidth: 1800) {
                          src
                        }
                      }
                  }
                }
              }
          }
        }
    `
  )

  return wpHeroSlides.wordpressWpSlides.data
}