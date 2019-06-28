import PropTypes from "prop-types"
import React from "react"
import HeaderTop from "./header-top"
import HeaderBottom from "./header-bottom"

const Header = ({ siteTitle, menuItems }) => (
  <header>
    <HeaderTop/>
    <HeaderBottom menuItems={menuItems} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
