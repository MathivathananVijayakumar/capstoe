// Dependencies
import React, { useState } from "react";

// Components
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import MyModal from "../../components/Modal/Modal";

// Images
import NoteApp from "../../images/note-app.jpg";
import Covid from "../../images/pandemic-tracker.jpg";
import ChatApp from "../../images/chat app.jpg";
import EmployeeDirectory from "../../images/employee-directory.jpg";
import EatDaBurger from "../../images/eat-da-burger.jpg";
import Weather from "../../images/weather-dashboard.jpg";
import ShelfIndulgence from "../../images/shelf-indulgence.jpg";
import MealMatcher from "../../images/meal-matcher.jpg";

// CSS
import "./MyProjects.css";

const MyProjects = () => {
  export const projects = [
    {
      title: "MERN Crud App",
      description:
        "Using React, Node.js, Express & MongoDB  this project gives an idea about how to develop Mern Project",
      tags: ["Mongo", "Express", "React", "Node"],
      visit: "https://github.com/MathivathananVijayakumar/Crud-using-Mern",
      id: 0,
    },
    {
      title: "Banking App",
      description:
        " using React, Node.js, Express & Postgres this project tells us how to develop complete Banking App ",
      tags: ["React", "Node", "Express", "Postgres"],
      visit: "https://github.com/MathivathananVijayakumar/banking",
      id: 1,
    },
    {
      title: "Photo App",
      description: "This is photo delete and update using mern stack",
      tags: ["Mongo", "Express", "React", "Node"],
      visit: "https://github.com/MathivathananVijayakumar/Photo/upload",
      id: 2,
    },
    {
      title: "e-commerce",
      description: "This is a ecommerce app done using Graphql",
      tags: ["Mongo", "Graphql Api", "React", "Node"],
      visit:
        "https://github.com/MathivathananVijayakumar/full-stack-app-using-graph-ql",
      id: 3,
    },
    {
      title: "Chatbot",
      description:
        "This is like a ChatApp which is used to communicate with friends which is done using React and ChatApi.",
      tags: ["React", "ChatEngineApi"],
      visit: "https://github.com/MathivathananVijayakumar/chat",
      id: 4,
    },
  ];

  const [modalShow, setModalShow] = useState(false);

  const [data, setData] = useState({});

  const onCardClick = (item) => {
    setModalShow(true);
    setData(item);
  };

  return (
    <div className="projects-container col-12" id="projects-container">
      <div className="projects-wrapper">
        <div className="row col-12" style={{ margin: "0 auto", width: "100%" }}>
          <h1 className="display-3 text-center projects-title">My Projects</h1>
        </div>
        <div className="row" style={{ margin: "0 auto", width: "90%" }}>
          {projects.map((item, i) => (
            <ProjectCard
              {...projects}
              key={i}
              src={item.src}
              alt={item.alt}
              id={item.id}
              text={item.text}
              title={item.title}
              className={item.className}
              onClick={() => onCardClick(item)}
            />
          ))}
        </div>
        <MyModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          {...data}
        />
      </div>
    </div>
  );
};

export default MyProjects;
