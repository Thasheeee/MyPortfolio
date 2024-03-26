import React from "react";
import "./skills.css";
import Instragram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.jpg'
import GitHub from '../../assets/github.png'

const skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">About me</span>
      <span className="skillDesc">
        I'm Thasheera Fernando, motivated and dedicated software engineering
        student, eager to learn about new aspects of modern-day skills and armed
        with a strong foundation in programming. My passion for technology and
        problem-solving aptitude drive me to support creative endeavors. I am a
        great communicator among others, a quick learner and I am passionate
        about team work, so I believe I could fit in different environments
        where I can contribute my skills while learning too.
      </span>
      <div className="links">
        <img src={Instragram} alt="Instagram" className="link"/>
        <img src={LinkedIn} alt="LinkedIn" className="link"/>
        <img src={GitHub} alt="Github" className="link"/>
      </div>
    </section>
  );
};

export default skills;
