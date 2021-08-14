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
        icon={<GiEarthAmerica style={{ fontSize: "4rem", color: "#14a76c" }} />}
        header="Domene"
        text="Bruk ditt eget domene eller skaff deg et nytt. ktl_design kan hjelpe til å skaffe et nytt domene. "
      />
      <InfoCard
        icon={
          <MdImportantDevices style={{ fontSize: "4rem", color: "#ffe400" }} />
        }
        header="Responsiv"
        text="Det er viktig at en nettside er responsiv. Hos Ktl design blir alle nettsider lager respnsive."
      />
      <InfoCard
        icon={<FaServer style={{ fontSize: "4rem", color: "#ff652f" }} />}
        header="Webhotell"
        text="ktl design bruker hosting med HTTPS/SSL som standard for bedre sikkerhet. "
      />
    </div>
  );
};

export default TextSection;
