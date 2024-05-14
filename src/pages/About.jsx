import React, { useState } from 'react'
import { useAuth } from '../store/auth';

const About = () => {

    const { user } = useAuth();

    return (
        <>
            <section className='section-hero'>
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>Welcome, {user.username}</p>
                        <h1>Why Choose Us?</h1>
                        <p className='aboutPara'>
                            Expertise: Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.
                        </p>
                        <p className='aboutPara'>
                            Customization: We understand that every business is unique. That's why we create solutions that are tailored to your specific needs and goals.
                        </p>
                        <p className='aboutPara'>
                            Customer-Centric Approach: We prioritize your satifactin and provide top-notch support to address your IT concerns.
                        </p>
                        <p className='aboutPara'>
                            Affordability: We offer competitive pricing without compromising on the quality of our services.
                        </p>
                        <p className='aboutPara'>
                            Reliability: Count on us to be there when you need us. We're committed to ensuring your IT environment is reliable and available 24/7.
                        </p>
                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className='btn'>Contact More</button>
                            </a>
                            <a href="/services">
                                <button className='btn secondary-btn'>Learn More</button>
                            </a>
                        </div>

                    </div>
                    <div className="hero-image">
                        <img src="/images/about.png" alt="home pic" width={"400"} height={"500"} />
                    </div>
                </div>

            </section>
        </>
    )
}

export default About