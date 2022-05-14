import React from 'react';
import './style.css';
import resume from '../../assets/images/oros-sara.pdf'


function Resume() {
    return (
      <>
        <div className="container resume-container">
          <br />
          <h1 id="tech-h1" className="d-flex justify-content-center profs mt-1 mb-1">
            Technologies:
          </h1>
          <a href={resume} target="_blank" rel="noreferrer">
            <button
              id="resume-link"
              className="btn btn-success btn-lg mt-4 mb-5"
            >
              View my Resume
            </button>
          </a>
          <div className="ul-container d-flex justify-content-between">
            <ul className="mt-3 mb-5 ml-5">
              <li>JavaScript</li> <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>React</li>
            </ul>
            <ul className="mt-3 mb-5 ml-5">
              <li>SQL</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
             <li>Object Relational Mapping</li>
              <li>Model-View-Controller</li> 
              <li>GraphQL</li>
              
            </ul>
            <ul className="mt-3 mb-5 ml-5">
              <li>Web APIs</li>
              <li>Third Party APIs</li>
              <li>Server-Side APIs</li>
              <li>Progressive Web Applications</li>
              <li>Object Oriented Programming</li>
              <li>Leadership & Organizational Skills</li>
            </ul>
          </div>
        </div>
      </>
    );
}

export default Resume;