import React from 'react'
import "./About.css";
import Me from "../../img/me2.jpg"

const About = () => {
    return (
        <div className="a">
            {/*Left Side of About Me Section */}
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Me} alt="" className="a-img" />
                </div>
            </div>
            {/*Right Side Of About Me Section */}
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p />
               <p className="a-sub">
                Hey! My name is Michael Yarc and I have been exploring the world of Web Development for over 6 years.
                Everything from .Net Core MVC to React and the MERN stack, I've dipped my toes in it all.
                
               </p>
               {/*About Me -- Description Section */}
                <p className="a-desc">
                Skilled in HTML,CSS and Javascript as well as using various libraries such as
                Bootstrap and JQuery.
                I specialize in creating beautiful,professional looking websites using
                best practice accesibility. At the moment, I am building applications using
                the MERN stack.
                If you're looking for a web developer to add to 
                 your team, I'd love to hear from you.
                </p>
            </div>
        </div>
    )
}

export default About
