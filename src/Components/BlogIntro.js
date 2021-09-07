import React from 'react';
import Blogging from "../Static/Images/blog.png";
import "../Static/Styles/BlogIntro.css"; 

function BlogIntro() {
    return (
        <div className="blogIntro">
            <section className="details">
                <h2>Welcome to sharing vision platform.</h2>
                <p>Here you can share your views with other people around world.</p>
                <p>And even can inspires your self from other people's experiences.</p>
            </section>
            <section className="imageContainer">
                <img src={Blogging} alt="blog"></img>
            </section>            
        </div>
    )
}

export default BlogIntro
