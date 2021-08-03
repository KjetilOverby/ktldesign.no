import React from "react";
import { FaFacebookSquare } from "react-icons/fa";

const KontaktTextComponent = () => {
  return (
    <>
      <div className="container">
        <div className="first-container">
          <h1>Flisa Bil AS</h1>
          <p className="text text2">Negardsveien 8</p>
          <p className="sub-name">2270 Flisa</p>
          <p className="sub-name">Tel: 62 95 19 10</p>
          <p className="sub-name">Mail: flisabil@online.no</p>
        </div>
        <div className="second-container">
          <h1>Kontaktpersoner</h1>
          <h2 className="name">Arild Nygaard</h2>
          <p className="sub-name">Daglig leder/bilsalg</p>
          <p className="sub-name">91 80 84 62</p>
          <h2 className="name2">Harald Hegge</h2>
          <p className="sub-name">Butikkansvarlig/verksted</p>
          <p className="sub-name">94 00 56 23</p>
        </div>
        <div className="third-container">
          <h1>Facebook</h1>
          <a href="https://nb-no.facebook.com/pages/category/Motor-Vehicle-Company/Flisa-Bil-As-Bilxtra-Flisa-294696983928901/">
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
          margin: 5rem 0;
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
