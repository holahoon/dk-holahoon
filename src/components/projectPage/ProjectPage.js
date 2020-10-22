import React from "react";
import { useParams } from "react-router-dom";

import { RiGithubLine } from "react-icons/ri";

function ProjectPage({ dkData }) {
  const { projectId } = useParams();

  return (
    <div className='project-page'>
      {dkData
        .filter(({ pageUrl }) => pageUrl === projectId)
        .map(({ title, description, linkUrl, githubUrl, image }) => (
          <div key={title} className='project-page__detail'>
            <a
              className='title'
              href={linkUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              {title}
            </a>
            <a
              className='image'
              href={linkUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={image} alt={title} />
            </a>
            <p className='description'>
              {description}{" "}
              <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
                check out my repo
                <RiGithubLine />
                <span className='red-line'></span>
              </a>
            </p>
          </div>
        ))}
    </div>
  );
}

export default ProjectPage;
