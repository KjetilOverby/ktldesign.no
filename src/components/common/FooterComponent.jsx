import React from "react";
import styles from "../../../styles/common/Footer.module.css";
import Image from "next/image";
import bilxtraLogo from "../../../assets/Bilxtra_logo.png";

const FooterComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <h2 className={styles.header}>Flisa Bil AS</h2>
        <br />
        <p className={styles.text}>Nergardsveien 8</p>
        <p className={styles.text}>2270 Flisa</p>
        <br />
        <p className={styles.text}>Tel: 629 51910</p>
        <p className={styles.text}>Email: flisabil@online.no</p>
        <p className={styles.text}>Bilsalg/v Arild Nygaard: 91 80 84 62</p>
      </div>
      <div className={styles.secondContainer}>
        <h2 className={styles.header}>Åpningstider</h2>
        <br />
        <p className={styles.text}>Man-Fre: 08:00-16:30</p>
        <p className={styles.text}>Lørdag: 10:00-13:00</p>
        <p className={styles.text}>Søndag: Stengt</p>
      </div>
      <div className={styles.thirdContainer}>
        <div style={{ width: "15rem" }}>
          <Image src={bilxtraLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
