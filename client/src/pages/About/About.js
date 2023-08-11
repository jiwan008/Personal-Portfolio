import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";


const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src= "images/picofme.png"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Hello, I'm Jeevan Kumar Sah, a dedicated MERN Stack developer currently pursuing my MCA at NIT Jamshedpur. I thrive on transforming innovative ideas into practical web solutions. With a track record of creating platforms like edtech websites and sorting visualizers, I'm passionate about seamless user experiences and efficient code.

Previously, I served as a Teaching Assistant at Coding Ninjas, guiding 800+ students through mastering Data Structures and Algorithms. Collaboration and continuous learning drive me, and I'm always seeking opportunities to connect with fellow developers.

Outside of coding, I'm an avid explorer of new concepts and coding experiments, often fueled by a cup of coffee. Let's connect and bring our coding visions to life together!
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
