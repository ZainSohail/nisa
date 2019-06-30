import React from "react"
import HeaderTop from "./header-top"
import HeaderBottom from "./header-bottom"

export default ({ pageTitle, location }) => {
    return (
      <header>
        <HeaderTop />
        <HeaderBottom location={location} pageTitle={pageTitle} />
      </header>
    )
}
