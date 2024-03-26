import React from "react";
import "./works.css";
import Wedding from "../../assets/wedding.png";
import Online from "../../assets/online.png";
import Student from "../../assets/student.jpg";
import Sport from "../../assets/football.jpg";
import Food from "../../assets/food.png";

const works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">Projects</h2>
      <div className="worksImgs">
        <div className="each-div">
          <div className="seperate">
            <img src={Wedding} alt="" className="worksImg" />
            <p className="project-topic">EnchantEase</p>
            <p className="project-desc">
              Developed a wedding event management system for couples and
              vendors in the field and this application was developed using
              django. The system recommends a color palette from the user
              submitted images and allow users to preview the furniture
              placement in the venue too.
            </p>
          </div>
        </div>
        <div className="each-div">
          <div className="seperate">
            <img src={Online} alt="" className="worksImg" />
            <p className="project-topic">Online shopping system</p>
            <p className="project-desc">
              The system was built with Java and Swing. It contains a console
              interface for the admins of the system and a seperate GUI for the
              customers. It allows admins to manage the products of the system
              while allowing customers to browse items, add to cart and view the
              final cost of the items.{" "}
            </p>
          </div>
        </div>

        <div className="each-div">
          <div className="seperate">
            <img src={Student} alt="" className="worksImg" />
            <p className="project-topic">Student progression system</p>
            <p className="project-desc">
              The student progression system was built with python. The purpose
              of this system is to allow students and lecturers to view the
              progression of the student. This system provides useful output for
              the academic purposes which aids into decision making.
            </p>
          </div>
        </div>
        <div className="each-div">
          <div className="seperate">
            <img src={Sport} alt="" className="worksImg" />
            <p className="project-topic">Wesbite for PSG</p>
            <p className="project-desc">
              A website for a football team which contains features such as a
              quiz and a shop including information about the football team too.
              The website was created using HTML, CSS and JavaScript. This site
              is helpful for the users to get knowledege about this particular
              football team.{" "}
            </p>
          </div>
        </div>
        <div className="each-div">
          <div className="seperate">
            <img src={Food} alt="" className="worksImg" />
            <p className="project-topic">Food queue management system</p>
            <p className="project-desc">
              The system was built using Java and JavaFX for the GUI. It manages
              the queues of the cashiers while offering a functionality for
              searching and displaying details of the customer which involves in
              improving the quality of the service and the customer
              satisfaction.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default works;
