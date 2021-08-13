import React from "react";

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
          <img
            style={{ width: "100%" }}
            src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
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
