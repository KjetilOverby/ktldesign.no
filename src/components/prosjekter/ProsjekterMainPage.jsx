import React from "react";

import ProjectDisplayPage from "./ProjectDisplayPage";

const ProsjekterMainPage = () => {
  return (
    <>
      <div className="container">
        <ProjectDisplayPage />
      </div>
      <style jsx>{`
        .container {
          grid-area: content;
          margin-top: 5rem;
        }
      `}</style>
    </>
  );
};

export default ProsjekterMainPage;
