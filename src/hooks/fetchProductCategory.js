import { useStaticQuery, graphql } from "gatsby"

const allProductCategories = () => {
  const allProductCategories = useStaticQuery(
    graphql`
        query allProductCategories {
            allWordpressWpProductCategory {
            nodes {
                name
                slug
                taxonomy {
                    description
                    slug
                }
                path
                acf {
                    category_image {
                            localFile {
                                childImageSharp {
                                    fluid {
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

  return allProductCategories.allWordpressWpProductCategory.nodes
}

export default allProductCategories