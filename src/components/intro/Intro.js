import React from 'react'
import "./Intro.css";
import GitHubLogo from "../../img/GitHub_Logo_White.png";
import LinkedInLogo from "../../img/LI-Logo.png";

const Intro = () => {
    return (
        <div className='i'>
            {/*Left side of component */}
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My Name Is</h2>
                    <h1 className="i-name">Michael Yarc</h1>

                    <div className="i-title">
                        <div className="i-title-wrapper">
                            {/*Animated section */}
                            <div className="i-title-item">Front End Development</div>
                            <div className="i-title-item">Back End Development</div>
                            <div className="i-title-item">MERN Stack Development</div>
                            <div className="i-title-item">Databases</div>
                            <div className="i-title-item">Computer Programming Student</div>
                        </div>
                    </div>
                    {/*Description section */}
                    <div className="i-desc">
                        Computer programming student at Lambton College in Sarnia,ON with a passion for
                        developing beautiful web applications. Passionate about Web Development and learning new technologies,with a desire
                        to apply my skills in a team environment. Check out some of my work below:
                    </div>
                </div>
            </div>
            {/*Right side of Intro component */}
            <div className="i-right">
                <div className="i-bg">
                    <div className="text-container">
                        {/*Github and LinkedIn links -- clickable images */}
                        <div className="logo-img">
                        <a href='https://github.com/mikeyarc?tab=repositories'><img src={GitHubLogo} alt="" className='a-img' /></a>
                        </div>
                        <div className="logo-img">
                        <a href='https://www.linkedin.com/in/michael-yarc/'><img src={LinkedInLogo} alt="" className='a-img' /></a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Intro
