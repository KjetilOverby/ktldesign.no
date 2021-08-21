import React from "react";
import Image from "next/image";

const ImageDisplay = ({ img1 }) => {
  return (
    <>
      <div className="container">
        <Image src={img1} />
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-gap: 2rem;
          margin: 0 45rem;
          margin-bottom: 5rem;
        }
        @media screen and (max-width: 2100px) {
          .container {
            margin: 0 30rem;
            margin-bottom: 5rem;
          }
        }
        @media screen and (max-width: 1300px) {
          .container {
            margin: var(--page-margin3);
            margin-bottom: 5rem;
          }
        }
        @media screen and (max-width: 1100px) {
          .container {
            margin: var(--page-margin4);
            margin-bottom: 5rem;
          }
        }
        @media screen and (max-width: 1000px) {
          .container {
            margin: var(--page-margin5);
            margin-bottom: 5rem;
          }
        }
      `}</style>
    </>
  );
};

export default ImageDisplay;
