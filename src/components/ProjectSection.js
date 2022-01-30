import React from 'react';
import Project from './Project';
import './projectSection.css';
import {projectList} from '../projectList';

function ProjectSection() {
    return (
        <div className='projectSection'>
            <h1>My Projects</h1>
            <div className='projectContainer'>
                {projectList.map((item, index) => {
                    return <Project key={index} name={item.name} tech_used={item.tech_used} url={item.url} image={item.image}/>
                })}
            </div>
            {/* <div className='projectContainer'>
                <Project />
                <Project />
            </div> */}
        </div>
    );
}

export default ProjectSection;
