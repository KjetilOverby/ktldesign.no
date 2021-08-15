import React from "react";
import Image from "next/image";
import responsive from "../../../assets/startpage/responsive_design.jpg";

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
          inn for fullt. Hos ktl_design er alt innhold responsive til alle
          skjermstørrelser.
        </p>
        <div className="image-container">
          <Image src={responsive} />
        </div>
      </div>
      <style jsx>{`
        .container {
          margin: var(--page-margin-single);
          padding-bottom: 5rem;
          display: grid;
          place-items: center;
          text-align: center;
        }
        .header {
          margin-bottom: 5rem;
          font-weight: 100;
          margin-top: 0rem;
        }

        .info-3-text {
          margin-bottom: 2rem;
        }
        @media screen and (max-width: 2100px) {
          .container {
            margin: var(--page-margin-single2);
          }
        }
        @media screen and (max-width: 1700px) {
          .container {
            margin: var(--page-margin-single3);
          }
        }
        @media screen and (max-width: 1570px) {
          .container {
            margin: var(--page-margin-single4);
          }
        }
        @media screen and (max-width: 950px) {
          .container {
            margin: var(--page-margin-single5);
            grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
            grid-column-gap: 0rem;
            text-align: left;
          }
          .header {
            margin: 1rem 0;
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
