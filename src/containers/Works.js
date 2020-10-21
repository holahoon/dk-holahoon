import React from "react";
import { Link, Route } from "react-router-dom";

import { dkData } from "components/data/dkData";
import useWindowsHeight from "hooks/useWindowsHeight";
import ProjectPage from "components/projectPage/ProjectPage";

function Works({ match }) {
  const windowInnerHeight = useWindowsHeight();

  return (
    <div className='works' style={{ height: `${windowInnerHeight}px` }}>
      <section className='works__projects-container'>
        {dkData.map(({ pageUrl, title, image }, index) => (
          <div className='project' key={index}>
            <Link to={`${match.path}/${pageUrl}`}>
              <img src={image} alt={title} />
              <span>{title}</span>
            </Link>
          </div>
        ))}

        <Route path={`${match.path}/:projectId`}>
          <ProjectPage dkData={dkData} />
        </Route>
      </section>
    </div>
  );
}

export default Works;
