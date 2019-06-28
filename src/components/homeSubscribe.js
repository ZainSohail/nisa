import React from "react"
import { images } from "../hooks/fetchImages"
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Markup } from 'interweave';

const HomeSubscribe = (props, state) => {
    const image = images()
    var email = null

    const handleInputChange = event => {
        const target = event.target

        if ( target.name === 'email') {
            email = target.value
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        addToMailchimp(email) // listFields are optional if you are only capturing the email address.
        .then(data => {
            var message = <Markup content={data.msg} />
            
            if (typeof document !== `undefined`) {
                var theDiv = document.getElementById("subMessage")
                theDiv.innerHTML = '<p>' + message.props.content + '</p>'
            }
            
        })
        .catch(() => {
            
        })
    }

    return (
        <section className="page-section stay-in-touch" id="subscribe">
            <img src={image.iconEmail.childImageSharp.fluid.originalImg} alt="" className="email-icon" />
            <h3>SUBSCRIBE FOR NEWSLETTER</h3>
            <h2>STAY IN TOUCH</h2>
            <img src={image.whiteWave.childImageSharp.fluid.originalImg} alt="" className="white-wave" />
            <div className="subscripe-form">
                <form onSubmit={handleSubmit} >
                    <input type="email" placeholder="Email" name="email" value={ (email ? email : '') } onChange={handleInputChange} />
                    <div className="submit">
                        <input type="submit" value="SUBSCRIBE TO NEWS" />
                    </div>
                </form>
            </div>
            <img src={image.stayInTouchFlower.childImageSharp.fluid.originalImg} alt="" className="flower" />
            <div className="message" id="subMessage">  </div>
        </section>
    ) 
}

export default HomeSubscribe;


