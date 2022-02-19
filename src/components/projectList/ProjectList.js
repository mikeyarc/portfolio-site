import React from 'react';
import './ProjectList.css';
import Project from '../project/Project';
import {projects} from '../../data'; /*Data file containing projects */

const ProjectList = () => {
    return (
    <div id="portfolio">
        {/*Projects Section */}
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Portfolio Projects</h1>
                <p className="pl-desc">
                Built using Html, CSS, Javascript and React.
                Currently working on MERN stack projects.
                </p>
            </div>
            {/*Mapping through projects and displaying them */}
            <div className="pl-list">
                {projects.map((item) =>(
                    <Project key ={item.id} img = {item.img} link = {item.link} desc = {item.desc}/>
                    
                ))} 
            </div>
        </div>
    </div>
    )
}

export default ProjectList
