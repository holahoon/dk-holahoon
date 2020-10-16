import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { RiGithubLine } from "react-icons/ri";

import projectImageJinkyu from "assets/images/projects/project-jinkyukang.png";
import projectImageHolahoon from "assets/images/projects/project-holahoon.png";

function Works() {
  const location = useLocation();
  const projects = [
    {
      pageUrl: "jinkyu-kang",
      title: "Designer - Jinkyu Kang",
      image: projectImageJinkyu,
      url: "https://www.erugogada.com/",
      github: "https://github.com/holahoon/Jin-Kyu-Kang",
      description:
        "A porfolio site of a designer - Jinkyu Kang. This project was built in collaboration with the designer ",
    },
    {
      pageUrl: "old-holahoon",
      title: "Developer - old DK",
      image: projectImageHolahoon,
      url: "https://www.google.com/",
      github: "https://github.com/holahoon/new-holahoon",
      description: "blah blah",
    },
  ];

  console.log(location);
  return (
    <div className='works'>
      <section className='works__projects-container'>
        {projects.map((project, index) => {
          const { pageUrl, title, image, url, github, description } = project;

          return (
            <div className='project' key={index}>
              <h3>{title}</h3>
              <Link to={`${location.pathname}/${pageUrl}`}>
                <img src={image} alt={title} />
              </Link>
            </div>
            // <div className='project'>
            //   <h3>{title}</h3>
            //   <a href={url} target='_blank' rel='noopener noreferrer'>
            //     <img src={image} alt={title} />
            //   </a>
            //   <a href={github} target='_blank' rel='noopener noreferrer'>
            //     <RiGithubLine />
            //   </a>
            //   <p>{description}</p>
            // </div>
          );
        })}
      </section>
    </div>
  );
}

export default Works;
