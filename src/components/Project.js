import React, { useState } from 'react';
import './project.css';
import blockly from '../images/blockly.png'

function Project({ name, tech_used, url, image }) {

    const [isMouseOver, setIsMouseOver] = useState(false);

    function mouseOverFunction() {
        setIsMouseOver(true);

    }

    function mouseOutFuncion() {
        setIsMouseOver(false);
    }
    return (
        <div id="project-wrapper" className='project-wrapper' onMouseEnter={mouseOverFunction} onMouseLeave={mouseOutFuncion} style={{ backgroundImage: "url(" + image + ")" }}>
            {isMouseOver ?
                <div className='details-container'>
                    <div>
                        <p>{name}</p>
                        <div className='tech-container'>
                            {tech_used.map((tech, index) => <span key={index}>{tech}</span>)}
                        </div>
                        <a href={url} target="_blank">Visit Project</a>
                    </div>
                </div>
                : null
            }
        </div>
    );
}

export default Project;
