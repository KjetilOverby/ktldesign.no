import React from "react";
import styles from "../../../styles/startpage/TopComponent.module.css";
import Link from "next/link";

const TopComponent = () => {
  return (
    <div className={styles.container}>
      <h1>Velkommen til Flisa Bil</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        temporibus porro dolor quae voluptatum nam in, blanditiis autem libero
      </p>
      <Link href="/kontakt">
        <button className="btn">Kontakt Oss</button>
      </Link>
    </div>
  );
};

export default TopComponent;
