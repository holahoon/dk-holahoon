import React from "react";
import { RiGithubLine } from "react-icons/ri";

import projectImageJinkyu from "assets/images/projects/project-jinkyukang.png";
import projectImageHolahoon from "assets/images/projects/project-holahoon.png";

function Works() {
  const projects = [
    {
      title: "Designer - Jinkyu Kang",
      image: projectImageJinkyu,
      url: "https://www.erugogada.com/",
      github: "https://github.com/holahoon/Jin-Kyu-Kang",
      description:
        "A porfolio site of a designer - Jinkyu Kang. This project was built in collaboration with the designer ",
    },
    {
      title: "Developer - old DK",
      image: projectImageHolahoon,
      url: "https://www.google.com/",
      github: "https://github.com/holahoon/new-holahoon",
      description: "blah blah",
    },
  ];

  // This project was built in React.js with the help of using Framer-Motion, a React animation library

  return (
    <div className='works'>
      <section className='works__projects-container'>
        {projects.map((project) => {
          const { title, image, url, github, description } = project;

          return (
            <div className='project'>
              <h3>{title}</h3>
              <a href={url} target='_blank' rel='noopener noreferrer'>
                <img src={image} alt={title} />
              </a>
              <a href={github} target='_blank' rel='noopener noreferrer'>
                <RiGithubLine />
              </a>
              <p>{description}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Works;
