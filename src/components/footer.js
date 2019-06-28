import React from "react"
import { wpOptions } from "../hooks/fetchOptions"
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMapMarker } from 'react-icons/fa';
import { Markup } from 'interweave';

const Footer = () => {
    const options = wpOptions();

    return (
        
        <footer>
            <section className="page-section contact" id="contact">
                <div className="container">
                    <div className="logo-social">
                        <div className="logo">
                            <a href=""><img src={options.logo.localFile.childImageSharp.fluid.src} alt="" /></a>
                        </div>
                        <ul>
                            <li><a href=""><FaFacebookF className="social-icon" /></a></li>
                            <li><a href=""><FaInstagram className="social-icon" /></a></li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <div className="item">
                                <span>
                                    <FaPhone className="social-icon-light" size="4em" />
                                </span>
                                <h3>PHONE</h3>
                                <p><Markup content={options.phone} /></p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="item">
                                <span>
                                    <FaEnvelope className="social-icon-light" size="4em" />
                                </span>
                                <h3>EMAIL</h3>
                                <p><Markup content={options.email} /></p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="item">
                                <span>
                                    <FaMapMarker className="social-icon-light" size="4em" />
                                </span>
                                <h3>ADDRESS</h3>
                                <p><Markup content={options.address} /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <p>{options.copyrights}</p>
        </footer>
    )
}

export default Footer
