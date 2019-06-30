import React from "react"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

const Breadcrumbs = ({ pageTitle, location }) => {
    return (
        <div className="breadcrumbs-wrapper">
          <div className="container">
              <div className="breadcrumbs">
                 <Breadcrumb
                    location={location}
                    crumbLabel={pageTitle}
                    crumbStyle={{ color: "#9d9d9d", fontSize: "16px" }}
                    crumbActiveStyle={{ color: "#4c137d", fontSize: "16px" }}
                    crumbSeparator=" / "
                  />          
              </div>
          </div>
        </div>
    )
}

export default Breadcrumbs