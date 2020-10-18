import React from "react";

function ProjectPage(props) {
  const {
    match: {
      params: { projectId },
    },
  } = props;

  return (
    <div>
      <h1>{projectId}</h1>
      <h2>this is project page</h2>
    </div>
  );
}

export default ProjectPage;
