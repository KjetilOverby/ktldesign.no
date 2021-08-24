import React from "react";
import Image from "next/image";

const SectionLayoutSingle = ({
  header,
  header2,
  text1,
  img1,
  text2,
  img2,
  text3,
  img3,
  text4,
  img4,
  atag1,
  link1,
  atag2,
  link2,
  imgSize,
  imgSize2,
}) => {
  return (
    <>
      <div className="container">
        <h1 className="header">{header}</h1>
        <p className="info-3-text">{text1}</p>

        {img1 && (
          <div className="image-container">
            <Image priority src={img1} layout="responsive" />
          </div>
        )}
        <p className="info-3-text">
          {text2} {atag1 && <a href={link1}>{atag1}</a>}
        </p>
        {header2 && <h1 className="header">{header2}</h1>}
        {img2 && (
          <div className="image-container">
            <Image src={img2} />
          </div>
        )}
        <p className="info-3-text">
          {text3} {atag2 && <a href={link2}>{atag2}</a>}
        </p>
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
          margin: 5rem 45rem 0 45rem;
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
          width: ${imgSize};
          margin-bottom: 2rem;
        }
        @media screen and (max-width: 2100px) {
          .container {
            margin: 3rem 30rem;
          }
          .image-container {
            width: ${imgSize2};
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
            margin: 0 2rem;
            grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
            grid-column-gap: 0rem;
            padding-bottom: 0;
          }
          .header {
            margin: 1rem 0;
          }
          .image-container {
            width: 23rem;
            margin-bottom: 3rem;
          }
        }
        @media screen and (max-width: 600px) {
          .container {
            margin: 0 .5rem;
            
        }
      `}</style>
    </>
  );
};

export default SectionLayoutSingle;
