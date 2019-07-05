import { useStaticQuery, graphql } from "gatsby"

const menuItems = () => {
  const menuItems = useStaticQuery(
    graphql`
      query menuItems {
        allWordpressWpApiMenusMenusItems(filter: {name: {eq: "Main Nav"}}) {
          nodes {
            items {
              attr
              target
              title
              order
              url
            }
          }
        }
      }
    `
  )

  return menuItems.allWordpressWpApiMenusMenusItems.nodes[0]
}

export default menuItems