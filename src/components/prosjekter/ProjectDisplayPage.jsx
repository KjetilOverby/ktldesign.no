import React from "react";
import Flisabil from "../../../assets/prosjekter/flisabilDesktop.png";
import Mkv from "../../../assets/prosjekter/mkvDesktop.png";
import Tool from "../../../assets/prosjekter/toolDesktop.png";
import Stridsbergs from "../../../assets/prosjekter/stridsbergsDesktop.png";
import Verktoy from "../../../assets/prosjekter/verktoyDesktop.png";
import Verktoy2 from "../../../assets/prosjekter/verktoy2Desktop.png";
import Post from "../../../assets/prosjekter/postDesktop.png";
import ProjectCard from "./ProjectCard";
import fon from "../../../assets/prosjekter/fonmassasje.jpg";
import it from "../../../assets/prosjekter/itDesktop.png";

const ProjectDisplayPage = () => {
  return (
    <>
      <div className="container">
        <ProjectCard
          img={Post}
          header="Postarkiv"
          description="Postarkiv er en kalkulator for oppsett av poster i en sag. Denne regner ut utfyllingsringer som skal brukes etter at uttaket fra en stokk er lagt inn. Dette programmet er laget spesielt til en MKV sag fra tyske produsenten Linck, med doble akslinger."
          linkTo="/postarkiv"
        />
        <ProjectCard
          img={Verktoy2}
          header="Sagbladreigster"
          description="Sagbladregister ble først utviklet for å ha kontroll på antall omloddinger et blad har. Etterhvert har det utviklet seg til å vise statistikk på vrak og service som kan sorteres ut ifra datoer."
          linkTo="sagbladregister"
        />
        <ProjectCard
          img={Flisabil}
          header="Flisa Bil"
          description="Flisa Bil hadde en utdatert nettside. Jeg snakket med de om de var interessert i en ny nettside som er responsiv. Det var de interessert i så da ble det ny nettside på de.
        "
          linkTo="/flisabil"
        />
        <ProjectCard
          img={Tool}
          header="Sagbladregister 2"
          description="En ny versjon av sagbladretister ble laget for å forbedre appen med ny teknologi.
        "
          linkTo="sagbladregister2"
        />
        <ProjectCard
          img={Stridsbergs}
          header="Stridsbergs"
          description="Kvarnstrands og Stridsbergs sin nettside er per i dag ikke helt optimal på mobiler. Nettsiden er fortsatt under utvikling."
          linkTo="stridsbergs"
        />
        <ProjectCard
          img={Verktoy}
          header="Sagbladoversikt"
          description="Sagbladoversikt er laget for verktøyleverandør så de kan se hvor mange blader som er vraket så det er lettere å se hvor mange ny blader som trengs.
        "
          linkTo="sagbladoversikt"
        />
      </div>

      <style jsx>{`
        .container {
          margin: var(--page-margin);
          padding-bottom: 5rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
          grid-column-gap: 3rem;
          grid-row-gap: 8rem;
        }
        .header {
          margin-bottom: 5rem;
          font-weight: 100;
          margin-top: 0;
        }
        @media screen and (max-width: 2100px) {
          .container {
            margin: var(--page-margin2);
            grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
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
            grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
            grid-column-gap: 0rem;
            margin: 0;
          }
          .imgContainer {
            order: 2;
          }
        }
      `}</style>
    </>
  );
};

export default ProjectDisplayPage;
