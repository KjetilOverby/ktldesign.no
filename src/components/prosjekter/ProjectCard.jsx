import React from "react";
import Image from "next/image";

const ProjectCard = ({ img, header, description }) => {
  return (
    <>
      <div className="container">
        <div className="imgContainer">
          <Image src={img} layout="responsive" />
          <h1 className="header">{header}</h1>
          <p className="description">{description}</p>
          <h3>Les mer</h3>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          border: 1px solid #d4d4d4;
          padding: 2rem;
        }
        .description {
        }
        .header {
          font-weight: 300;
          font-size: 3rem;
        }
        .imgContainer {
          width: 100%;
        }
        @media (max-width: 2100px) {
          .imgContainer {
            width: 30rem;
          }
        }
        @media (max-width: 700px) {
          .container {
            padding: 1rem;
            width: 100%;
            border: none;
          }
        }
      `}</style>
    </>
  );
};

export default ProjectCard;
