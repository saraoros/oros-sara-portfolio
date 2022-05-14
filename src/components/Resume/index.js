import React from 'react';
import './style.css';
import resume from '../../assets/images/oros-sara.pdf'


function Resume() {
    return (
        <>
            <section id="header-img-partial"></section>

            <div className="container resume-container">
                <a href={resume} target="_blank" rel='noreferrer'><button className="btn btn-success btn-lg mt-5 mb-5">Resume Here</button></a>
                <h1 className='d-flex justify-content-center profs mb-5'>Technologies:</h1>
                    <div className='ul-container d-flex justify-content-between'>
                        <ul className='mt-3 mb-5 ml-5'>
                           <li>JavaScript</li> <li>Node.js</li>
                           <li>Express.js</li>
                           <li>MongoDB</li>
                            <li>React</li>
                        </ul>
                        <ul className='mt-3 mb-5 ml-5'>
                            <li>SQL</li>
                            <li>HTML</li>
                            <li>CSS/Bootstrap</li>
                            <li>GraphQL</li>
                            <li>Object Relational Mapping</li>
                            <li>Model-View-Controller</li>
                        </ul>
                        <ul className='mt-3 mb-5 ml-5'>
                            <li>Web APIs</li>
                            <li>Third Party APIs</li>
                            <li>Server-Side APIs</li>
                            <li>Object Oriented Programming</li>
                            <li>Progressive Web Applications</li>
                            <li>Leadership & Organizational Skills</li>
                        </ul>
                    </div>
            </div>
        </>
    );
}

export default Resume;