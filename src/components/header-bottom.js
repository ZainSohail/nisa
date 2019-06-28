import PropTypes from "prop-types"
import React from "react"
import MainMenu from "./mainMenu"

const HeaderBottom = ({ menuItems }) => (
    <div className="header-bottom">
        <MainMenu menuItems={menuItems} />
    </div>
)

HeaderBottom.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderBottom.defaultProps = {
  siteTitle: ``,
}

export default HeaderBottom