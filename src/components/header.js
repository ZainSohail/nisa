import React from "react"
import HeaderTop from "./header-top"
import HeaderBottom from "./header-bottom"

export default ({ children }) => {
    return (
      <header>
        <HeaderTop />
        <HeaderBottom />
      </header>
    )
}
