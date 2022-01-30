import React, { useEffect, useState } from 'react';
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
                        <a href={url} target="_blank" className="link">Visit Project</a>
                        {name == 'NFL Fantasy gaming webiste' && <p className='extension'>Please use <a href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en" target="_blank">this</a> extension in order to use this website</p>}
                    </div>
                </div>
                : null
            }
        </div>
    );
}

export default Project;
