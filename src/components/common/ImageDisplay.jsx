import React from "react";
import Image from "next/image";
import img4 from "../../../assets/postarkiv/mkv.jpg";
import post1 from "../../../assets/postarkiv/post1.png";
import post2 from "../../../assets/postarkiv/post2.png";
import post3 from "../../../assets/postarkiv/post3.png";
import post4 from "../../../assets/postarkiv/post4.png";

const ImageDisplay = () => {
  return (
    <>
      <div className="container">
        <Image src={img4} />
        <Image src={post1} />
        <Image src={post2} />
        <Image src={post3} />
        <Image src={post4} />
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
