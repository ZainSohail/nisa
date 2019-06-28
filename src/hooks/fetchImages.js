import { useStaticQuery, graphql } from "gatsby"

const images = () => {
  const images = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              originalImg
            }
          }
        }
        wave: file(relativePath: { eq: "wave-go-to-next.png" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                originalImg
              }
            }
        }
        angle: file(relativePath: { eq: "angle-down.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              originalImg
            }
          }
        }
        aboutNisa: file(relativePath: { eq: "about-nisa.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              originalImg
            }
          }
        }
        greenWave: file(relativePath: { eq: "green-wave.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              originalImg
            }
          }
        }
        redWave: file(relativePath: { eq: "red-wave.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              originalImg
            }
          }
        }
        whiteWave: file(relativePath: { eq: "white-wave.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              originalImg
            }
          }
        }
        aboutNisaLeftLeaf: file(relativePath: { eq: "about-nisa-left.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              originalImg
            }
          }
        }
        aboutNisaRightLeaf: file(relativePath: { eq: "about-nisa-right.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              originalImg
            }
          }
        }
        productFlower: file(relativePath: { eq: "product-flower.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              originalImg
            }
          }
        }
        skinCareFlower: file(relativePath: { eq: "skin-care-flower.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              originalImg
            }
          }
        }
        stayInTouchFlower: file(relativePath: { eq: "stay-in-touch-flower.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              originalImg
            }
          }
        }
        iconEmail: file(relativePath: { eq: "email-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              originalImg
            }
          }
        }
    }
  `)

  return images
}
 
export default images