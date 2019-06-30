import React from "react"
import MainMenu from "./mainMenu"
import Breadcrumbs from "./breadcrumbs"

export default ({ pageTitle, location }) => {
    
    return (
        <div className="header-bottom">
            <MainMenu />
            <Breadcrumbs pageTitle={pageTitle} location={location} />
        </div>
    )
}