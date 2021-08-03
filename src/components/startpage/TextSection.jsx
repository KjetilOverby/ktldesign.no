import React from "react";
import styles from "../../../styles/startpage/TextSection.module.css";

const TextSection = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Kort om oss</h1>
      <p className={styles.text}>
        Flisa Bil ble startet i 1985, den gang under navnet Solør bil og fritid.
        Den gang holdt de til i andre etasje hos Flisa Karosseriverksted, og
        campingvogner og reparasjoner var en stor del av virksomheten. I 1999
        flyttet de inn i dagens lokaler i Negardsveien 8, hvor Fredriksen Bil
        tidligere hadde hatt tilhold. I dag er salget av campingvogner en saga
        blott, men bruktbilsalget er fortsatt viktig for den tradisjonsrike
        Åsnes-bedriften. – Vi har rundt 40 bruktbiler inne i alle prisklasser.
        Alt fra rimelige biler og opp til biler i prisklasse 300.000 til
        400.000.
      </p>

      <p className={styles.text}>
        Midt mellom Kongsvinger og Elverum ligger Flisa Bil AS i Negardsvn 8 i
        Flisa sentrum.
      </p>
      <br />
      <ul>
        <li>
          <p className={styles.text}>Kjøp og salg av alle typer bruktbiler</p>
          <p className={styles.text}>
            (Vi er godkjent som autoreg forhandler av Statens Vegevesen, dette
            gjør at vi kan omregistrere og levere biler umiddelbart.)
          </p>
        </li>
        <li>
          <p className={styles.text}>Bilxtra verksted</p>
        </li>
        <li>
          <p className={styles.text}>Bilxtra butikk</p>
        </li>
        <li>
          <p className={styles.text}>Periodisk kjøretøykontroll/EU kontroll</p>
        </li>
        <li>
          <p className={styles.text}>Godkjent av Statens Vegevesen</p>
        </li>
        <li>
          <p className={styles.text}>Medlem av Norges bilbransjeforbund</p>
        </li>
      </ul>
    </div>
  );
};

export default TextSection;
