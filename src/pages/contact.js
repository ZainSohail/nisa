import React from "react"
import Layout from "../components/layout"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

const ContactPage = ({data, location}) => {

    var formData = {}

    const handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name

        formData[name] = value;
    }

    const handleSubmit = e => {
    
        (async () => {
            e.preventDefault()
            
            const rawResponse = await fetch('https://nisa.onx.digital/wp-json/wp/v2/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(formData)
            });

            const content = await rawResponse.json();

            if (typeof document !== `undefined`) {
                var theDiv = document.getElementById("contactMessage")
                theDiv.innerHTML = '<p>' + content.message + '</p>'
            }

            console.log(content);
            console.log(JSON.stringify(formData));
        })();
    }

    return (        
      <Layout customClass="contact" location={location} pageTitle={'Contact'} crumbLabel="Contact">

        <div className='container inner-content'>
            <div className="page-title-wrapper">
                <h1 className="pageTitle" dangerouslySetInnerHTML={{__html: data.wordpressPage.title}}/>
            </div>
            
            <div className="row">

                <div className="col-sm-12 col-md-6">
                    <form onSubmit={handleSubmit} className="text-left border border-light" method="post" encType='multipart/form-data' >

                        <input type="text" id="defaultContactFormName" className="form-control mb-4" name="name" placeholder="Name" onChange={handleInputChange} />
                        <input type="email" id="defaultContactFormEmail" className="form-control mb-4" name="email" placeholder="E-mail" onChange={handleInputChange} />

                        <div className="form-group">
                            <textarea className="form-control rounded-0" name="message" id="exampleFormControlTextarea2" rows="3" placeholder="Message" onChange={handleInputChange}></textarea>
                        </div>

                        <button className="btn btn-block" type="submit">Send</button>

                        <div id="contactMessage"> </div>
                    </form>
                </div>

                <div className="col-sm-12 col-md-6">
                    <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}}/>
                </div>
            </div>

        </div>
      </Layout>
    )
}

export default ContactPage


export const pageQuery = graphql`
    query Contact {
      wordpressPage(title: {eq: "Contact Us"}) {
        title,
        content
      }
    }
`