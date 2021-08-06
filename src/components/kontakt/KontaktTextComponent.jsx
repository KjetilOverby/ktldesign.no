import React from "react";
import { FaFacebookSquare } from "react-icons/fa";

const KontaktTextComponent = () => {
  return (
    <>
      <div className="container">
        <div className="first-container">
          <h1>Melby Bil AS</h1>
          <p className="text text2">Fredheimkrysset</p>
          <p className="sub-name">2092 Minnesund</p>
          <p className="sub-name">Tel: 63 96 88 70</p>
          <p className="sub-name">Faks: 63 96 46 04</p>
          <p className="sub-name">Mobil: 90 91 00 25</p>
          <p className="sub-name">Email: melbybilsalg@gmail.com</p>
        </div>
        <div className="second-container">
          <h1>Beliggenhet</h1>
          <p className="sub-name">
            Beliggenheten er på Minnesund, kun 30 min. med flybussen nordover
            fra Oslo Lufthavn Gardermoen.
          </p>
          <br />
          <p className="sub-name">Avstand fra Gjøvik: 63 km.</p>
          <p className="sub-name">Avstand fra Hamar: 53 km.</p>
          <p className="sub-name">Avstand fra Oslo: 63 km.</p>
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
