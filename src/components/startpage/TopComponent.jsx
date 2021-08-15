import React from "react";
import styles from "../../../styles/startpage/TopComponent.module.css";
import Link from "next/link";

const TopComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>KTL DESIGN</h1>

      <div className={styles.topHeaderContainer}>
        <h1 className={styles.topheader1}>MAKE ONE WEBSITE</h1>
        <div className={styles.topHeader2Container}>
          <h1 className={styles.topheader2}>MAKE</h1>
          <h1 className={styles.topheader3}>YOUR DREAM</h1>
        </div>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Jeg er en privatperson som jobber som freelancing og bygger statiske
          nettsider til bedrifter og privat. Ingen store utgifter, men en
          månedsleie av nettsiden etter at den er publisert. Avslutt leien når
          som helst dersom du/dere vil gå over til en annen tjeneste.
        </p>
        <h4 className={styles.text2}>
          Ta kontakt for en hyggelig og uforpliktende prat hvis du trenger en
          nettside som ikke koster for mye.
        </h4>
        {/* <Link href="/kontakt">
          <button className={styles.button}>Ta kontakt</button>
        </Link> */}
      </div>
    </div>
  );
};

export default TopComponent;
