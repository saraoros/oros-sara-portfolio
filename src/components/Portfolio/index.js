import React from 'react';
import Project from '../Project';
import './style.css';

function Portfolio(props) {

    const workArr = [
      {
        url: "https://saraoros.github.io/covid-testing-locations/",
        title: "Covid-19 Testing Locations",
        github: "https://github.com/saraoros/covid-testing-locations",
        class: "big-box-1",
        id: null,
      },
      {
        url: "https://lit-caverns-99502.herokuapp.com/",
        title: "Lets Talk Tech Blog",
        github: "https://github.com/saraoros/lets-talk-tech-blog",
        class: "big-box-2",
        id: null,
      },
      {
        // url: "",
        title: "README Generator",
        github: "https://github.com/saraoros/readme-generator",
        class: "half-box",
        id: "half-box1",
      },
      {
        url: "https://saraoros.github.io/js-password-generator/",
        title: "Password Generator",
        github: "https://github.com/saraoros/js-password-generator",
        class: "half-box",
        id: "half-box2",
      },

    ];

    return (
        <>
        <section className='d-flex justify-content-center' id="header-img-partial"></section>
                <h2 className='d-flex justify-content-center' id="work-title">Portfolio</h2>
            <section id="work">
                <div class="column"></div>
                <div id="work-imgs-container" class="main-section-content">
                    {
                        workArr.map(work => {
                            return <Project work={work}/>
                        })
                    }
                </div>
                    
            </section>
        </>
    );
}

export default Portfolio;