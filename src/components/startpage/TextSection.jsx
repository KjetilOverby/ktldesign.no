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
        icon={
          <MdImportantDevices style={{ fontSize: "4rem", color: "#ffe400" }} />
        }
        header="Responsiv"
        text="Over 50% bruker i dag mobil eller nettbrett til surfing. Det er derfor viktig at en nettside er responsiv. Dvs at nettsiden tar seg bra ut i alle skjermstørrelser fra små mobiler til store desktopskjermer. Hos ktl_design er alt innhold responive til alle skjermstørrelser."
      />
      <InfoCard
        icon={<GiEarthAmerica style={{ fontSize: "4rem", color: "#14a76c" }} />}
        header="Domene"
        text="Bruk ditt eget domene eller skaff deg et nytt. ktl_design kan hjelpe til å skaffe et nytt domene. Tenk på hva domene ditt skal hete. Det er ikke sikkert at det er ledig, alle domenenavn i verden er unike og ingen kan ha helt like navn. "
      />
      <InfoCard
        icon={<FaServer style={{ fontSize: "4rem", color: "#ff652f" }} />}
        header="Hosting"
        text="ktl design bruker Vercel for hosting av nettsider. Vercel bruker HTTPS/SSL som standard for bedre sikkerhet. Hosting av nettside er inkludert i månedsleien."
      />
    </div>
  );
};

export default TextSection;
