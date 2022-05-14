import React from "react";
import profilePic from "../../assets/images/profile-pic.jpeg";
import "./style.css";

function About(props) {
  return (
    <>
      <section id="about">
        <div className="about-pic">
          <h2 id="about-title">About Me</h2>
          <img src={profilePic} alt="profile-pic" className="profile-pic" />
        </div>
        <div className="column"></div>
        <div className="main-section-content">
          <p className="about-p">
            I cannot imagine my life without coding. I always thought my dream
            was to be a missionary in a Spanish-speaking country. This seemed
            appropriate since I received a BA in Ministry and I was a women's
            college campus leader for many years. But I yearned for more, I
            wanted to learn something new.
            <br />
            <br />
             While being a women's campus leader,
            I was offered an optician position. For the first time, I was
            exposed to software engineers at an optical conference. I thought it
            was incredible that they were able to customize an entire
            application to fit our needs. "How did they do that?!", I would
            think often to myself. Four years into the job, I was still yearning
            to learn a new skill.
            <br />
            <br />
            
             In 2020, like many others, I decided to take a
            leap of faith and take a step back to reflect on who I wanted to be.
            I spent a year reflecting on me while working as a guest advocate at
            Target. Then, I decided to start to learn how to code on my own. I quickly fell in love with coding and I decided to sign up for a full stack coding boot camp. Since
            starting my coding boot camp journey, I realized that I've finally
            found what I was yearning for. I absolutely love the satisfaction
            that comes from building a clean user interface, mobile responsive
            web application using both front end and back end technologies.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
