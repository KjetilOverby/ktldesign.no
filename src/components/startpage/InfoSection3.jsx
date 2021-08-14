import React from "react";
import Image from "next/image";
import responsive from "../../../assets/startpage/responsive.jpg";

const InfoSection3 = () => {
  return (
    <>
      <div className="container">
        <h1 className="header">Responsive nettsider</h1>
        <p className="info-3-text">
          Når man snakker om responsive nettsider så betyr det at en nettside
          tilpasser seg automatisk til forskjellige skjermstørrelser. Over 50%
          bruker i dag mobil eller nettbrett til surfing. Det er derfor viktig
          at en nettside er responsiv. Dvs at nettsiden tar seg bra ut i alle
          skjermstørrelser fra små mobiler til store desktopskjermer. Mange
          nettsider er i dag utdaterte for de har blitt laget før mobiler kom
          inn for fullt. Hos ktl_design er alt innhold responive til alle
          skjermstørrelser.
        </p>
        <Image src={responsive} />
      </div>
      <style jsx>{`
        .container {
          margin: 0 50rem;
          padding-bottom: 5rem;
          display: grid;
          place-items: center;
          text-align: center;
        }
        .header {
          margin-bottom: 5rem;
          font-weight: 100;
          margin-top: 3rem;
        }
        .info-3-text {
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
            margin: 0 1rem;
            grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
            grid-column-gap: 0rem;
            text-align: left;
          }
          .imgContainer {
            order: 2;
          }
        }
      `}</style>
    </>
  );
};

export default InfoSection3;
