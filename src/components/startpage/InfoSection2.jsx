import React from "react";

const InfoSection2 = () => {
  return (
    <>
      <div className="container">
        <div className="imgContainer">
          <img
            style={{ width: "100%" }}
            src="https://images.unsplash.com/photo-1586281380426-f644f2dc6ada?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
        <div>
          <h1 className="header">Nytt domene</h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            ratione sequi quam animi, tempore tenetur, odio veniam earum, qui in
            nesciunt saepe magnam provident autem ad? Nulla incidunt sint
            voluptatum! deg.
          </p>
          <br />
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            doloribus consequatur tenetur aliquid deleniti praesentium eligendi
            adipisci, officia voluptatum fuga rem dolor. Temporibus expedita
            quibusdam ipsum beatae hic, deserunt at.
          </p>
        </div>
      </div>
      <style jsx>{`
        .container {
          margin: var(--page-margin);
          padding-bottom: 5rem;
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
          }
        }
        @media screen and (max-width: 950px) {
          .container {
            margin: var(--page-margin5);
            grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
            grid-column-gap: 0rem;
          }
          .imgContainer {
            order: 2;
          }
        }
      `}</style>
    </>
  );
};

export default InfoSection2;
