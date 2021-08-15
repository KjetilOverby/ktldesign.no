import React from "react";
import Image from "next/image";
import server from "../../../assets/startpage/server.jpg";

const InfoSection4 = () => {
  return (
    <>
      <div className="container">
        <h1 className="header">Webhotell</h1>
        <p className="info-3-text">
          Et webhotell er en server som man kan publisere nettsider til. Der
          lagres filene til nettsiden og kan hentes av en nettleser som skriver
          adressen til den aktuelle siden. Ktl Design bruker Vercel til
          publisering av nettsider. Du kan besøker Vercel sin nettside{" "}
          <a href="https://vercel.com/">her</a>
        </p>
        <p className="info-3-text">
          Før nettsiden blir publisert på ditt domene så vil nettsiden din ha et
          domene som Ktl Design administrerer. Du får adressen og kan se
          utviklingen av nettsiden fra begynnelse til slutt. Dette gjør at du
          kan komme med egne ønsker hvis du får noen ideer underveis. Har du
          designet nettsiden din selv så bygger vi selvsagt den. Etter
          publisering så blir nettsiden også gjort kjent for google så
          søkemotorene til google finner nettsiden din ved søk. Også kalt
          søkemotoroptimalisering (SEO) som står for Search Engine Optimization
        </p>
        <div className="image-container">
          <Image src={server} />
        </div>
      </div>
      <style jsx>{`
        .container {
          margin: 5rem 45rem;
          padding-bottom: 5rem;
          display: grid;
          place-items: center;
          text-align: center;
        }
        .header {
          margin-bottom: 5rem;
          font-weight: 100;
        }
        .info-3-text {
          margin-bottom: 5rem;
        }
        .image-container {
          width: 40rem;
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
          .header {
            margin: 1rem 0;
          }
          .image-container {
            width: 23rem;
          }
          .imgContainer {
            order: 2;
          }
        }
      `}</style>
    </>
  );
};

export default InfoSection4;
