import React from "react"
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import wpOptions from "../hooks/fetchOptions"

export default ({ children }) => {
    const options = wpOptions()
    
    return (
        <div className="header-top">
            <div className="container">
                <ul>
                    <li><a href={options.facebook_handle} target="_blank"> <FaFacebookF className="social-icon" /> </a></li>
                    <li><a href={options.facebook_handle} target="_blank"> <FaInstagram className="social-icon" /> </a></li>
                </ul>
                <ul>
                    <li><a href="mailto: info@trendcos.co"><FaEnvelope className="social-icon" /> <span>info@trendcos.com</span></a> </li>
                    <li><a href="tel: +92-42-36302297"><FaPhone className="social-icon" />  <span>+92-42-36302297</span></a> </li>
                </ul>
            </div>
        </div>
    )
}
