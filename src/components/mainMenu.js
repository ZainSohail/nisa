import React from "react"
import { menuItems } from "../hooks/fetchMenu"
import { wpOptions } from "../hooks/fetchOptions"

const MainMenu = () => {
    const items = menuItems().items;
    const options = wpOptions();
    let path = window.location.pathname.replace('/','')
    return (
        <div className="container">
            <a href="/" className="logo"> <img src={options.logo.localFile.childImageSharp.fluid.src} alt="" /> </a>
            <a href="/" className="mobile-menu-button">
                <span></span>
                <span></span>
                <span></span>
            </a>
            <ul className="menu">
                {items.map((item) => {  
                    if ( path === item.url ) {
                        return (
                            <li className="active" > <a href={"/" + item.url} > {item.title} </a> </li>
                        ) 
                    } else {
                        return (
                            <li> <a href={item.url} > {item.title} </a> </li>
                        ) 
                    }
                    
                })}
            </ul>
        </div>
    ) 
}

export default MainMenu;