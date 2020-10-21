import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProjectPage({ dkData }) {
  const { projectId } = useParams();

  useEffect(() => {
    getProjectData(dkData, projectId);
  }, [dkData, projectId]);

  const getProjectData = (data, projectId) => {
    data.forEach(({ pageUrl }) => {
      if (pageUrl === projectId) {
        console.log(pageUrl);
      }
    });
  };

  return (
    <div className='project-page'>
      <h1>{projectId}</h1>
      <h2>this is project page</h2>
    </div>
  );
}

export default ProjectPage;
