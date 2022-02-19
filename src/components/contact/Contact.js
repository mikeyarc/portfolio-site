import React from 'react'
import "./Contact.css";
import PhoneImage from "../../img/phone.png";
import EmailImage from "../../img/email.png";
import AddressImage from "../../img/address.png";
import {useRef} from "react"; //Using react hook
import emailjs from '@emailjs/browser';//Email JS Library
import { useState } from 'react'; 

const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false)
    /*Function to handle sending email to my email account after filling out form --Uses EmailJS library */
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("michaelyarc93", "template_qbsz3wo", formRef.current, "user_Kpd6TS7g0kF0eM3bbJzuL")
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
          
      });
    }
    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                 {/*Left Side Of Component */}
                <div className="c-left">
                    <h1 className="c-title">Contact Me</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={PhoneImage} alt="" className="c-icon" />  
                            519-328-2419              
                        </div>
                        {/*Email item */}
                        <div className="c-info-item">
                            <img src={EmailImage} alt="" className="c-icon" />  
                            michaelyarc93@gmail.com             
                        </div>
                        {/*Address item */}
                        <div className="c-info-item">
                            <img src={AddressImage} alt="" className="c-icon" />  
                            Sarnia,Ontario            
                        </div>
                    </div>
                </div>
                {/*Right Side Of Component , Uses EmailJS-com package*/}
                <div className="c-right">
                    <p className="c-desc">
                        I can be reached via email,phone or you can fill out the form below.
                        Thank You!
                    
                    </p>
                    <form ref = {formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <input type="text" placeholder="Phone Number" name="user_phoneno" />
                        <textarea placeholder= "Message" name="message" rows="9"></textarea>
                        <button>Submit</button>
                        {/**Show message to user if user clicks submit button on form --uses UseState */}
                        {done && "Thank you...."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
