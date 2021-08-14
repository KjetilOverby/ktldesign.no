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
          description="Short description"
        />
        <ProjectCard
          img={Verktoy2}
          header="Sagbladreigster"
          description="Short description"
        />
        <ProjectCard
          img={Flisabil}
          header="Flisa Bil"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid similique debitis est autem, repellendus suscipit, fugit corporis quas eligendi aliquam dicta nisi officiis! Sed, accusantium sunt enim mollitia incidunt modi.
        "
        />
        <ProjectCard
          img={Tool}
          header="Sagbladregister"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid similique debitis est autem, repellendus suscipit, fugit corporis quas eligendi aliquam dicta nisi officiis! Sed, accusantium sunt enim mollitia incidunt modi.
        "
        />
        <ProjectCard
          img={Stridsbergs}
          header="Stridsbergs"
          description="Short description"
        />
        <ProjectCard
          img={Verktoy}
          header="Sagbladoversikt"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid similique debitis est autem, repellendus suscipit, fugit corporis quas eligendi aliquam dicta nisi officiis! Sed, accusantium sunt enim mollitia incidunt modi.
        "
        />

        <ProjectCard
          img={fon}
          header="Fon Massasje"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid similique debitis est autem, repellendus suscipit, fugit corporis quas eligendi aliquam dicta nisi officiis! Sed, accusantium sunt enim mollitia incidunt modi.
        "
        />
        <ProjectCard
          img={it}
          header="It-care"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid similique debitis est autem, repellendus suscipit, fugit corporis quas eligendi aliquam dicta nisi officiis! Sed, accusantium sunt enim mollitia incidunt modi.
        "
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
