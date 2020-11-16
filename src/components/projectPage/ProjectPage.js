import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import WrapperTransition from "components/wrapperContainerTransition/WrapperTransition";
import useWindowsHeight from "hooks/useWindowsHeight";
import { LanguageContext } from "hooks/LanguageContext";
import { dkData } from "components/data/dkData";
import { RiGithubLine } from "react-icons/ri";
import { AiOutlineSwapLeft } from "react-icons/ai";

function ProjectPage({ history }) {
  const windowInnerHeight = useWindowsHeight();
  const { projectId } = useParams();
  const { languageHandler } = useContext(LanguageContext);
  const isLanguageKorean = languageHandler[0];

  const previousPageHandler = () => {
    history.goBack();
  };

  return (
    <WrapperTransition>
      <div className='project-page'>
        {dkData
          .filter(({ pageUrl }) => pageUrl === projectId)
          .map(({ english, korean, linkUrl, githubUrl, gifImage, stacks }) => (
            <div
              key={english.title}
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
                <img src={gifImage} alt={english.title} />
              </a>
              <h2 className='title'>
                <a href={linkUrl} target='_blank' rel='noopener noreferrer'>
                  {isLanguageKorean ? korean.title : english.title}
                </a>
              </h2>
              <div className='stacks-container'>
                {stacks.map((stack) => (
                  <span className='stacks-logo'>{stack}</span>
                ))}
              </div>
              <p className='description'>
                {isLanguageKorean ? korean.description : english.description}{" "}
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
