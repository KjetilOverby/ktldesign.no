import React from "react";
import styles from "../../../styles/startpage/TopComponent.module.css";
import Link from "next/link";

const TopComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Velkommen til Melby Bilsalg</h1>
      <p>
        Melby Bilsalg har holdt på i en årrekke med brukte biler, og har alltid
        hatt kunden i fokus, derav så mange fornøyde kunder. Vårt utvalg spenner
        seg fra 2 - 15 år gamle biler.
      </p>
      <h4>Velkommen til en hyggelig bilprat og handel hos Melby Bilsalg</h4>
      <Link href="/kontakt">
        <button className="btn">Kontakt Oss</button>
      </Link>
    </div>
  );
};

export default TopComponent;
