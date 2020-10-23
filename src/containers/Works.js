import React from "react";
import { Link } from "react-router-dom";

import WrapperTransition from "components/wrapperContainerTransition/WrapperTransition";
import { dkData } from "components/data/dkData";
import useWindowsHeight from "hooks/useWindowsHeight";

function Works({ match }) {
  const windowInnerHeight = useWindowsHeight();

  return (
    <WrapperTransition>
      <div className='works' style={{ minHeight: `${windowInnerHeight}px` }}>
        <h2 className='works__page-title'>side hustles</h2>
        <div className='works__projects-container'>
          {dkData.map(({ pageUrl, title, image }, index) => (
            <div className='project' key={index}>
              <Link to={`${match.path}/${pageUrl}`}>
                <img src={image} alt={title} />
                <span>{title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </WrapperTransition>
  );
}

export default Works;
