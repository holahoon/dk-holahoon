import React from "react";
import { Link, Route } from "react-router-dom";

import useWindowsHeight from "hooks/useWindowsHeight";
import { dkData } from "components/data/dkData";
import ProjectPage from "components/projectPage/ProjectPage";

function Works({ match }) {
  const windowInnerHeight = useWindowsHeight();

  return (
    <div className='works' style={{ height: `${windowInnerHeight}px` }}>
      <section className='works__projects-container'>
        {dkData.map((project, index) => {
          const { pageUrl, title, image, backgroundColor } = project;
          return (
            <div className='project' key={index}>
              <Link
                to={`${match.path}/${pageUrl}`}
                style={{ backgroundColor: backgroundColor }}
              >
                <img src={image} alt={title} />
                <h3>{title}</h3>
              </Link>
            </div>
          );
        })}

        <Route path={`${match.path}/:projectId`} component={ProjectPage} />
      </section>
    </div>
  );
}

export default Works;
