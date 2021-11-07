import React from "react";
import styles from "../../../styles/startpage/TextSection.module.css";
import InfoCard from "./InfoCard";
import { MdImportantDevices } from "react-icons/md";
import { GiEarthAmerica } from "react-icons/gi";
import { FaServer } from "react-icons/fa";

const TextSection = () => {
  return (
    <div className={styles.container}>
      <InfoCard
        icon={<GiEarthAmerica style={{ fontSize: "4rem", color: "#464866" }} />}
        header="Domene"
        text="Bruk ditt eget domene eller skaff deg et nytt. Ktl Design kan hjelpe til å skaffe et nytt domene. "
      />
      <InfoCard
        icon={
          <MdImportantDevices style={{ fontSize: "4rem", color: "#298a82" }} />
        }
        header="Responsiv"
        text="Det er viktig at en nettside er responsiv. Hos Ktl Design blir alle nettsider laget responsive."
      />
      <InfoCard
        icon={<FaServer style={{ fontSize: "4rem", color: "#2e9cca" }} />}
        header="Webhotell"
        text="Ktl Design bruker hosting med HTTPS/SSL som standard for bedre sikkerhet. "
      />
    </div>
  );
};

export default TextSection;
