import './Landing.modules.css'
import React from 'react'
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="container">
            <section className="showcase">
                <div className="video-container">
                    <video src="https://player.vimeo.com/external/462160121.sd.mp4?s=b2e118eea2bcc91158332d62885b599057595636&profile_id=164&oauth2_token_id=57447761" loop autoPlay ></video>
                </div>
                <div className="content">
                    <h1>Create Users</h1>
                    <h2>storage users data</h2>
                    <Link to={'/form'} className='btn'>Let's Get Started</Link>
                </div>
            </section>

            <section id="about">
                <h2>About</h2>
                <p>
                UserManager is your go-to destination for managing user information in a secure and efficient way. Our platform is designed to help you create, store, and manage user profiles in a robust database system. Whether you're developing an application that requires user authentication or simply need to organize user data, UserManager has you covered. With easy-to-use features, you can seamlessly integrate user management into your application, ensuring a smooth and personalized experience for your users.
                </p>

               
            </section>
        </div>
    );
}

export default Landing;