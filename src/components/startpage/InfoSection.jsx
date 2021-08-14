import React from "react";
import Image from "next/image";
import computer from "../../../assets/startpage/computer.webp";

const InfoSection = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1 className="header">Eksisterende domene</h1>
          <p className="text">
            Når man skal ha en ny leverandør på et domene som du allerede eier
            så må man logge inn på leverandøren sin nettside og gjøre om noen
            innstilinger på domenet. Innstillingene er å gjøre om navneserverne
            så ktl_design sine nettleverandører får tilgang til å publisere på
            domenet. Dette kan man gjøre selv ved å få navenserverne som skal
            legges inn, eller man kan gi oss tilgang så vi legger det inn for
            deg.
          </p>
          <br />
          <p className="text">
            Hvis du ikke har tilgang på ditt domene så kan du kontakte din
            nåværende leverandør, mange leverandører innehar denne informasjonen
            når de lager ferdige pakker med domene og nettside.
          </p>
        </div>
        <div>
          <Image src={computer} />
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
        }
      `}</style>
    </>
  );
};

export default InfoSection;
