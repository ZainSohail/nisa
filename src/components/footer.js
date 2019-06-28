import React from "react"
import wpOptions from "../hooks/fetchOptions"
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa';

export default ({ children }) => {
    const options = wpOptions()

    return (
        <footer>
            <section className="page-section contact" id="contact">
                <div className="container">
                    <div className="logo-social">
                        <div className="logo">
                            <a href="/"><img src={options.logo.localFile.childImageSharp.fluid.src} alt="" /></a>
                        </div>
                        <ul>
                            <li><a href="/"><FaFacebookF className="social-icon" /></a></li>
                            <li><a href="/"><FaInstagram className="social-icon" /></a></li>
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <div className="item">
                                <span>
                                    <FaPhone className="social-icon-light" size="4em" />
                                </span>
                                <h3>PHONE</h3>
                                <p
                                   dangerouslySetInnerHTML={{
                                      __html: options.phone
                                   }}
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="item">
                                <span>
                                    <FaEnvelope className="social-icon-light" size="4em" />
                                </span>
                                <h3>EMAIL</h3>
                                <p
                                   dangerouslySetInnerHTML={{
                                      __html: options.email
                                   }}
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className="item">
                                <span>
                                    <FaMapMarker className="social-icon-light" size="4em" />
                                </span>
                                <h3>ADDRESS</h3>
                                <p
                                   dangerouslySetInnerHTML={{
                                      __html: options.address
                                   }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <p
               dangerouslySetInnerHTML={{
                  __html: options.copyrights
               }}
            />
        </footer>
    )
}
