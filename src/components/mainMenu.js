import React from "react"
import menuItems from "../hooks/fetchMenu"
import wpOptions from "../hooks/fetchOptions"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default ({ children }) => {
    const items = menuItems().items
    const options = wpOptions()
    var path = null;

    if (typeof window !== 'undefined') {
       path = window.location.pathname.replace('/','')
    }
   
    return (
        <div className="container">
            <a href="/" className="logo"> <img src={options.logo.localFile.childImageSharp.fluid.src} alt="" /> </a>
            <a href="/" className="mobile-menu-button">
                <span></span>
                <span></span>
                <span></span>
            </a>
            <ul className="menu">
                {items.map((item, i) => {  
                    if ( path === item.url ) {
                        return (
                            <li key={i} className="active" > 
                                <AniLink paintDrip to={item.url} duration={1} hex="#4a107a" >
                                  {item.title}
                                </AniLink>
                            </li>
                        ) 
                    } else {
                        return (
                            <li key={i}> 
                                <AniLink paintDrip to={item.url} duration={1} hex="#4a107a" >
                                  {item.title}
                                </AniLink>
                            </li>
                        ) 
                    }
                    
                })}
            </ul>
        </div>
    ) 
}