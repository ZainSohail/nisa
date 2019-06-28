import React from "react"
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';

const HeaderTop = () => (
    <div class="header-top">
        <div class="container">
            <ul>
                <li><a href="/"> <FaFacebookF className="social-icon" /> </a></li>
                <li><a href="/"> <FaInstagram className="social-icon" /> </a></li>
            </ul>
            <ul>
                <li><a href="mailto: info@trendcos.co"><FaEnvelope className="social-icon" /> <span>info@trendcos.com</span></a> </li>
                <li><a href="tel: +92-42-36302297"><FaPhone className="social-icon" />  <span>+92-42-36302297</span></a> </li>
            </ul>
        </div>
    </div>
)

export default HeaderTop
