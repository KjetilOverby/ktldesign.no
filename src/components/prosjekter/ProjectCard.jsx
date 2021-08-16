import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ img, header, description, linkTo }) => {
  return (
    <>
      <div className="container">
        <div className="imgContainer">
          <Image src={img} layout="responsive" />
          <h1 className="header">{header}</h1>
          <p className="description">{description}</p>
          <Link href={`${linkTo}`}>
            <h3 className="btn">Les mer</h3>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .btn:hover {
          cursor: pointer;
        }
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
