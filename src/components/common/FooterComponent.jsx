import React from "react";
import styles from "../../../styles/common/Footer.module.css";
import Image from "next/image";
import bilxtraLogo from "../../../assets/melby_bilsalg_logo.png";
import logo from "../../../assets/ktl_design_logo3.png";

const FooterComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <div className={styles.logoContainer}>
          {/* <h2 style={{ color: "var(--footer-header)" }} className="logo-font">
            ktl_design
          </h2> */}
          <Image src={logo} />
          <p className={styles.underLogoText}>make website, wake dreams</p>
        </div>

        <br />
        <p className={styles.text}>Konglebækvegen 9, 2270 Flisa</p>
        <p className={styles.text}>Tlf: 97541236</p>
        <p className={styles.text}>Email: ktldesign80@gmail.com</p>
      </div>
      {/* <div className={styles.secondContainer}>
        <h2 className={styles.header}>Åpningstider</h2>
        <br />
        <p className={styles.text}>Man-Fre: 08:00-16:30</p>
        <p className={styles.text}>Lørdag: 10:00-13:00</p>
        <p className={styles.text}>Søndag: Stengt</p>
      </div> */}
      {/* <div className={styles.thirdContainer}>
        <div style={{ width: "15rem" }}>
          <p className={`${styles.logo} logo-font`}>ktl_design</p>
        </div>
      </div> */}
    </div>
  );
};

export default FooterComponent;
