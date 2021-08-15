import React from "react";
import { FaFacebookSquare } from "react-icons/fa";

const KontaktTextComponent = () => {
  return (
    <>
      <div className="container">
        <div className="first-container">
          <h1>Ktl Design</h1>
          <p className="text text2">Konglebækvegen 9</p>
          <p className="sub-name">2270 Flisa</p>
          <p className="sub-name">Tlf: 975 41 236</p>
          <p className="sub-name">Email: ktldesign80@gmail.com</p>
        </div>

        <div className="second-container">
          <h1>Facebook</h1>
          <a href="https://facebook.com">
            <h2 className="name">Følg oss på facebook</h2>
            <FaFacebookSquare
              style={{ color: "#2063af", fontSize: "4rem", marginTop: "1rem" }}
            />
          </a>
        </div>
      </div>
      <style jsx>{`
        h1 {
          color: #6e6e6e;
          font-weight: 500;
        }
        a {
          text-decoration: none;
        }
        .container {
          display: grid;
          grid-template-columns: 10rem 25rem 25rem 1fr 10rem;
          grid-template-areas: ". fc sc tc .";
          margin: 5rem 0 16rem 0;
          grid-column-gap: 2rem;
        }

        .first-container {
          grid-area: fc;
        }
        .second-container {
          grid-area: sc;
        }
        .third-container {
          grid-area: tc;
        }
        .name {
          font-weight: 100;
          margin: 0;
        }
        .name2 {
          font-weight: 100;
          margin: 2rem 0 0 0;
        }
        .sub-name {
          margin: 0;
        }
        .text2 {
          margin: 0;
        }
        @media screen and (max-width: 2100px) {
          .container {
            margin: 5rem 0 7rem 0;
          }
        }
        @media screen and (max-width: 1000px) {
          .container {
            margin: 0 0 5rem 0;
            grid-template-columns: 1rem 1fr 1fr;
            grid-row-gap: 2rem;
            grid-template-areas:
              ". fc fc"
              ". sc sc"
              ". tc tc";
          }
        }
      `}</style>
    </>
  );
};

export default KontaktTextComponent;
