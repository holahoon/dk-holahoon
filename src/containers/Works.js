import React from "react";
import { Link } from "react-router-dom";

import { dkData } from "components/data/dkData";
import useWindowsHeight from "hooks/useWindowsHeight";

function Works({ match }) {
  const windowInnerHeight = useWindowsHeight();

  return (
    <div className='works' style={{ minHeight: `${windowInnerHeight}px` }}>
      <section className='works__projects-container'>
        {dkData.map(({ pageUrl, title, image }, index) => (
          <div className='project' key={index}>
            <Link to={`${match.path}/${pageUrl}`}>
              <img src={image} alt={title} />
              <span>{title}</span>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Works;
