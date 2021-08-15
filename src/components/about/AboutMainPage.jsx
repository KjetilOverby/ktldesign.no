import React from "react";
import AboutSection from "./AboutSection";

const AboutMainPage = () => {
  return (
    <>
      <div className="container">
        <AboutSection />
      </div>
      <style jsx>{`
        .container {
          grid-area: content;
          margin: var(--page-margin);
          padding-bottom: 5rem;
          padding-top: 8rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
          grid-column-gap: 3rem;
        }
        .header {
          margin-bottom: 5rem;
          font-weight: 100;
          margin-top: 0;
        }
        @media screen and (max-width: 2100px) {
          .container {
            margin: var(--page-margin2);
          }
        }
        @media screen and (max-width: 1700px) {
          .container {
            margin: var(--page-margin3);
          }
        }
        @media screen and (max-width: 1570px) {
          .container {
            margin: var(--page-margin4);
            padding-top: 5rem;
          }
        }
        @media screen and (max-width: 950px) {
          .container {
            margin: var(--page-margin5);
            grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
            grid-column-gap: 0rem;
            padding-top: 2rem;
          }
          .imgContainer {
          }
        }
      `}</style>
    </>
  );
};

export default AboutMainPage;
