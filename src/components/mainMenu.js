import React from "react"
import menuItems from "../hooks/fetchMenu"
import wpOptions from "../hooks/fetchOptions"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default ({ children }) => {
    const items = menuItems().items
    const options = wpOptions()
    var path = null;
    var menuClass = '';

    if (typeof window !== 'undefined') {
       path = window.location.pathname.replace('/','')
    }

    const toggleMenu = (e) => {
        e.preventDefault();
        var element = document.getElementById("mobile-menu-button");
        element.classList.toggle("opened");

        var element = document.getElementById("main-menu");
        element.classList.toggle("menu-visible");
    }
   
    return (
        <div className="container">
            <a href="/" className="logo"> <img src={options.logo.localFile.childImageSharp.fluid.srcWebp} alt="" /> </a>
            <a href="/" className="mobile-menu-button" id="mobile-menu-button" onClick={toggleMenu} >
                <span></span>
                <span></span>
                <span></span>
            </a>
            <ul className="menu" id="main-menu">
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