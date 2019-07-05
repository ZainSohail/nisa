import { useStaticQuery, graphql } from "gatsby"

const images = () => {
  const images = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: { eq: "placeholder.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              originalImg,
              srcWebp
            }
          }
        }
        wave: file(relativePath: { eq: "wave-go-to-next.png" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                originalImg,
                srcWebp
              }
            }
        }
        angle: file(relativePath: { eq: "angle-down.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              originalImg,
              srcWebp
            }
          }
        }
        aboutNisa: file(relativePath: { eq: "about-nisa.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              originalImg,
              srcWebp
            }
          }
        }
        greenWave: file(relativePath: { eq: "green-wave.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              originalImg,
              srcWebp
            }
          }
        }
        redWave: file(relativePath: { eq: "red-wave.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              originalImg,
              srcWebp
            }
          }
        }
        whiteWave: file(relativePath: { eq: "white-wave.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              originalImg,
              srcWebp
            }
          }
        }
        aboutNisaLeftLeaf: file(relativePath: { eq: "about-nisa-left.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              originalImg,
              srcWebp
            }
          }
        }
        aboutNisaRightLeaf: file(relativePath: { eq: "about-nisa-right.png" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              originalImg,
              srcWebp
            }
          }
        }
        productFlower: file(relativePath: { eq: "product-flower.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              originalImg,
              srcWebp
            }
          }
        }
        skinCareFlower: file(relativePath: { eq: "skin-care-flower.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              originalImg,
              srcWebp
            }
          }
        }
        stayInTouchFlower: file(relativePath: { eq: "stay-in-touch-flower.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              originalImg,
              srcWebp
            }
          }
        }
        iconEmail: file(relativePath: { eq: "email-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              originalImg,
              srcWebp
            }
          }
        }
    }
  `)

  return images
}
 
export default images