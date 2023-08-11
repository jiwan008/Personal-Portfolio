import React from "react";
import { SiReact, SiCodingninjas } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Sep 2022 - Jan 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiCodingninjas />}
            >
              <h3 className="vertical-timeline-element-title">
                DSA Teaching Assistant
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Coding Ninjas
              </h4>
              <p>
              Key responsibilities during this internship :) <br/>

              <ul>👉  To help students by taking their doubts on Data Structures and Algorithms with C++.</ul>
              <ul>👉  To assist them in understanding the problem and approach.</ul>
              <ul>👉  Debugging codes and work upon logic building.</ul>
              <ul>👉  Mentored 800+ students.</ul>


              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Aug 2020 - Oct 2020"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Web Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
              Akaaro Consulting and Training
              </h4>
              <p>
              During my internship at Akaaro Consulting and Training, I took a lead role in crafting the company's official website from inception to completion. Leveraging my expertise in HTML, CSS, JavaScript, and React, I transformed creative concepts into a fully functional and visually captivating website. Key contributions include:

              </p>
            </VerticalTimelineElement>
           
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
