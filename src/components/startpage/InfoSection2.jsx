import React from "react";
import Image from "next/image";
import domain from "../../../assets/startpage/domain1.jpg";

const InfoSection2 = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1 className="header">Nytt domene</h1>
          <p className="text">
            Hvis du ikke har et domenenavn så kan du kjøpe et. Det er mange som
            selger domenenavn, men det er noen regler hvis du skal ha et norsk
            domene som slutter på .no. I norge er det Norid som styrer hvem som
            kan søke norske domener. Du kan lese mer om dette{" "}
            <a href="https://www.norid.no/no/nytt-domenenavn/hvem-kan-ha-domene/">
              her
            </a>
          </p>
          <br />
          <p className="text">
            Hvis du har tenkt på hva domenenavnet ditt skal være så må du sjekke
            om det er ledig. Det kan du gjøre{" "}
            <a href="https://www.norid.no/no/nytt-domenenavn/finn-ledig-domenenavn/">
              her.
            </a>{" "}
            Når du skaffer et domene så oppretter du et abonnement til domene.
            Da har du retten til det domenet så lenge du betaler det. Dersom du
            ikke betaler lenger så er det ledig igjen for andre.{" "}
            <a href="https://www.norid.no/no/nytt-domenenavn/abonnementsvilkar/">
              Abbonementsvilkår
            </a>{" "}
            Les mer om hvordan du bestiller et domenenavn{" "}
            <a href="https://www.norid.no/no/nytt-domenenavn/bestille-domenenavn">
              her
            </a>
          </p>
          <p className="text">
            Man kan også skaffe internasjonale domener som blan annet .net og
            .com, da trenger man ikke å søke. Ktl Design kan ordne prossessen
            med nytt domene hvis du ikke ønsker å begi deg ut på det.
          </p>
        </div>
        <div className="imgContainer">
          <Image src={domain} />
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
          margin-top: 3rem;
        }
        .imgContainer {
          width: 30rem;
        }
        .info-3-text {
          margin-bottom: 2rem;
        }
        @media screen and (max-width: 2100px) {
          .container {
            margin: var(--page-margin-single2);
          }
          .imgContainer {
            width: 25rem;
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
            width: 20rem;
          }
        }
      `}</style>
      {/* <style jsx>{`
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
          .imgContainer {
            order: 2;
          }
        }
      `}</style> */}
    </>
  );
};

export default InfoSection2;
