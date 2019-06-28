import React from "react"
import { allBlogPosts } from "../hooks/fetchBlogPosts"
import { images } from "../hooks/fetchImages"

const HomeBlog = () => {
    const posts = allBlogPosts()
    const image = images()

    return (
        <section className="page-section skin-care" id="skin-care">
            <div className="container">
                <h2>SKIN CARE TIPS</h2>
                <h3>GET LATEST TIPS</h3>
                <div className="img">
                    <img src={image.redWave.childImageSharp.fluid.originalImg} alt="" />
                </div>
                <div className="row">
                        {posts.map((post) => {   
                            return (
                                <div className="col-sm-12 col-md-4">
                                    <div className="item">
                                        <div className="content">
                                            <img src={ ( post.node.featured_media ? post.node.featured_media.localFile.childImageSharp.fluid.src : '') } alt="" />
                                            <h3>{post.node.title}</h3>
                                            <p>{post.node.content}</p>
                                            <a href={post.node.path}>READ MORE</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
            <img src={image.skinCareFlower.childImageSharp.fluid.originalImg} alt="" className="flower" />
        </section>
    ) 
}

export default HomeBlog;