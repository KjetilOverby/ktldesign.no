import React from "react";
import Image from "next/image";
import domain from "../../../assets/startpage/domain.webp";

const InfoSection2 = () => {
  return (
    <>
      <div className="container">
        <div className="imgContainer">
          <Image src={domain} />
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
