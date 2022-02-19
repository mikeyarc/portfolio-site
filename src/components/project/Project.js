import React from 'react'
import "./Project.css";


const Project = ({img,link,desc}) => {
    return (
        /*Layout Section for showcasing projects */
        <div className='p'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <p className = 'p-desc'>{desc}</p>  
            <a href={link} target= '_blank' rel='noreferrer'>
                <img src={img} alt="" className='p-img' />
            </a>   
        </div>
       
        
    )
}

export default Project
