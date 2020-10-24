import React, { useContext } from "react";
import { Link } from "react-router-dom";

import WrapperTransition from "components/wrapperContainerTransition/WrapperTransition";
import { dkData } from "components/data/dkData";
import useWindowsHeight from "hooks/useWindowsHeight";
import { LanguageContext } from "hooks/LanguageContext";

function Works({ match }) {
  const windowInnerHeight = useWindowsHeight();
  const { languageHandler } = useContext(LanguageContext);
  const isLanguageKorean = languageHandler[0];

  return (
    <WrapperTransition>
      <div className='works' style={{ minHeight: `${windowInnerHeight}px` }}>
        <div className='works__projects-container'>
          {dkData.map(({ pageUrl, english, korean, year, image }, index) => (
            <div className='project' key={index}>
              <Link to={`${match.path}/${pageUrl}`}>
                <img src={image} alt={english.title} />
                <span>
                  <span>{isLanguageKorean ? korean.title : english.title}</span>
                  <span>({year})</span>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </WrapperTransition>
  );
}

export default Works;
