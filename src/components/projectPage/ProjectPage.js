import React from "react";
import { useParams } from "react-router-dom";

import WrapperTransition from "components/wrapperContainerTransition/WrapperTransition";
import useWindowsHeight from "hooks/useWindowsHeight";
import { dkData } from "components/data/dkData";
import { RiGithubLine } from "react-icons/ri";
import { AiOutlineSwapLeft } from "react-icons/ai";

function ProjectPage({ history }) {
  const windowInnerHeight = useWindowsHeight();
  const { projectId } = useParams();

  const previousPageHandler = () => {
    history.goBack();
  };

  return (
    <WrapperTransition>
      <div className='project-page'>
        {dkData
          .filter(({ pageUrl }) => pageUrl === projectId)
          .map(({ title, description, linkUrl, githubUrl, image }) => (
            <div
              key={title}
              className='project-page__detail'
              style={{ minHeight: `${windowInnerHeight}px` }}
            >
              <button className='button' onClick={previousPageHandler}>
                <AiOutlineSwapLeft />
                back
              </button>
              <a
                className='image'
                href={linkUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={image} alt={title} />
              </a>
              <h2 className='title'>
                <a href={linkUrl} target='_blank' rel='noopener noreferrer'>
                  {title}
                </a>
              </h2>
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
    </WrapperTransition>
  );
}

export default ProjectPage;
