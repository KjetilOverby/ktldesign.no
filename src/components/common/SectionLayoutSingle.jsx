import React from "react";
import Image from "next/image";

const SectionLayoutSingle = ({
  header,
  text1,
  img1,
  text2,
  img2,
  text3,
  img3,
  text4,
  img4,
}) => {
  return (
    <>
      <div className="container">
        <h1 className="header">{header}</h1>
        <p className="info-3-text">{text1}</p>

        {img1 && (
          <div className="image-container">
            <Image src={img1} layout="responsive" />
          </div>
        )}
        <p className="info-3-text">{text2}</p>
        {img2 && (
          <div className="image-container">
            <Image src={img2} />
          </div>
        )}
        <p className="info-3-text">{text3}</p>
        {img3 && (
          <div className="image-container">
            <Image src={img3} />
          </div>
        )}
        <p className="info-3-text">{text4}</p>
        {img4 && (
          <div className="image-container">
            <Image src={img4} />
          </div>
        )}
      </div>
      <style jsx>{`
        .container {
          margin: 5rem 45rem;
          padding-bottom: 5rem;
          display: grid;
          place-items: center;
          text-align: center;
        }
        .header {
          margin-bottom: 5rem;
          font-weight: 100;
        }
        .info-3-text {
          margin-bottom: 5rem;
        }
        .image-container {
          width: 40rem;
          margin-bottom: 2rem;
        }
        @media screen and (max-width: 2100px) {
          .container {
            margin: 0 30rem;
          }
        }
        @media screen and (max-width: 1700px) {
          .container {
            margin: 0 20rem;
          }
        }
        @media screen and (max-width: 1570px) {
          .container {
            margin: 0 10rem;
          }
        }
        @media screen and (max-width: 950px) {
          .container {
            margin: 0 0.5rem;
            grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
            grid-column-gap: 0rem;
            text-align: left;
            padding-bottom: 0;
          }
          .header {
            margin: 1rem 0;
          }
          .image-container {
            width: 23rem;
            margin-bottom: 0;
          }
        }
      `}</style>
    </>
  );
};

export default SectionLayoutSingle;
