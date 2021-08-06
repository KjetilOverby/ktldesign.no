import React from "react";
import styles from "../../../styles/common/Footer.module.css";
import Image from "next/image";
import bilxtraLogo from "../../../assets/melby_bilsalg_logo.png";

const FooterComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <h2 className={styles.header}>Melby Bilsalg AS</h2>
        <br />
        <p className={styles.text}>Fredheimkrysset</p>
        <p className={styles.text}>2092 Minnesund</p>
        <br />
        <p className={styles.text}>Tel: 63 96 88 70</p>
        <p className={styles.text}>Faks: 63 96 46 04</p>
        <p className={styles.text}>Mobil: 90 91 00 25</p>
        <p className={styles.text}>Email: melbybilsalg@gmail.com</p>
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
