import React from 'react';
import './topSection.css';

function TopSection() {
    return (
        <div className='topSection-container'>
            <h1>Hello! my name is <span style={{fontWeight: "500"}}>Ankit Anand</span></h1>
            <p>I'm <span style={{fontWeight: "500"}}>ReactJS</span> developer.</p>
            <p>View my <span style={{fontWeight: "500"}}>projects</span> or send me an email at <span style={{fontWeight: "500"}}>ankit854100@gmail.com</span></p>
        </div>
    );
}

export default TopSection;
