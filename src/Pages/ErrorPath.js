import React from 'react';
import { Link } from 'react-router-dom';
import error from "../Static/Images/error.png"

function ErrorPath() {
    return (
        <div className="blogIntro">
            <section className="details">
                <h2>Sorry </h2>
                <p>This path does not exist</p>
                <p>But Dont Worry you can go back to home</p>
                <Link to="blog" style={{color:'white'}}>Let's Go To Home</Link>
            </section>
            <section className="imageContainer">
                <img src={error} alt="blog"></img>
            </section>            
        </div>
    )
}

export default ErrorPath
