import React from 'react'
import './about.css'
import "../App.css"

const About = () => {

    return (
        <>
            <section className="sections" id="about">
                <h1 className="title">About</h1>
                <div className="main-content">
                    <div className="about-img">
                        <img src="https://marketifythemes.com/html/waxon/img/about/2.jpg" alt="" />
                    </div>
                    <div className="about-info">
                        <h1>Telecommunication Engineer, Web Designer & Developer</h1>
                        <p>It's Syeda Maham Fahim. I was born and raised in Karachi, Pakistan. I'm 19th.</p>
                        <div className="personal-info">
                            <div className="personal-info-left">
                                <ul>
                                    <li className="personal-info-li"> <strong>Birthday:</strong> <span>19 June 2002</span></li>
                                    <li  className="personal-info-li"> <strong>Website:</strong> <span>www.example.com</span></li>
                                    <li  className="personal-info-li"> <strong>Phone:</strong> <span>+92 331 2852257</span></li>
                                    <li  className="personal-info-li"> <strong>City:</strong> <span>Karachi, Pakistan</span></li>
                                </ul>
                            </div>
                            <div className="personal-info-right">
                                <ul>
                                <li className="personal-info-li" ><strong>Age:</strong> <span>19</span></li>
                <li className="personal-info-li" ><strong>Degree:</strong> <span>Telecommunication Engineering (In
                    Progress)</span> </li>
                <li className="personal-info-li" ><strong>Email:</strong> <span>syedamahamfahim@gmail.com</span>
                </li>
                <li className="personal-info-li" ><strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>

                        </div>
                        <p>
            Currently, i'm doing Telecommunication Engineering from Pakistan's top university; NED University of
            Engineering and Technology. I've always been attach to designing and development. Later i realized my
            passion towards web designing and development. I does what i'm fond off. Surely, you will love my work as
            well. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit exercitationem ullam doloremque optio, recusandae molestias quam vel unde! Ut, laboriosam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit exercitationem ullam doloremque optio, recusandae molestias quam vel unde! Ut, laboriosam.
          </p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About