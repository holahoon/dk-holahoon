import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import WrapperTransition from "components/wrapperContainerTransition/WrapperTransition";
import useWindowsHeight from "hooks/useWindowsHeight";
import { LanguageContext } from "hooks/LanguageContext";
import { dkData } from "components/data/dkData";
import { RiGithubLine } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { SiFirebase, SiReact, SiRedux, SiMaterialUi } from "react-icons/si";
import { AiOutlineSwapLeft } from "react-icons/ai";

function ProjectPage({ history }) {
  const windowInnerHeight = useWindowsHeight();
  const { projectId } = useParams();
  const { languageHandler } = useContext(LanguageContext);
  const isLanguageKorean = languageHandler[0];

  const previousPageHandler = () => {
    history.goBack();
  };

  const stackIcons = {
    react: <SiReact />,
    redux: <SiRedux />,
    firebase: <SiFirebase />,
    "material-ui": <SiMaterialUi />,
    sass: <FaSass />,
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
              <p className='description'>
                {isLanguageKorean ? korean.description : english.description}{" "}
                <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
                  check out my repo
                  <RiGithubLine />
                  <span className='red-line'></span>
                </a>
              </p>
              <div className='stacks-container'>
                <span className='stacks-title'>stacks:</span>
                {stacks.map((stack) => (
                  <span className={`logo-${stack.className}`}>
                    {stackIcons[stack.name]}
                    {stack.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </WrapperTransition>
  );
}

export default ProjectPage;
