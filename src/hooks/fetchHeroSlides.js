import { useStaticQuery, graphql } from "gatsby"

const wpHeroSlides = () => {
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
                          src,
                          srcWebp
                        }
                      }
                  }
                }
                slider_image {
                  localFile {
                    childImageSharp {
                        fluid(maxWidth: 1800) {
                          src,
                          srcWebp
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

export default wpHeroSlides