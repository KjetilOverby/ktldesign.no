import React from "react";
import SectionLayoutSingle from "../common/SectionLayoutSingle";
import blade_id from "../../../assets/sagbladregister/blade_id.jpg";
import sagbladregister1 from "../../../assets/sagbladregister/sagbladregister1.png";

const SagbladregisterMainPage = () => {
  return (
    <>
      <div className="container">
        <SectionLayoutSingle
          header="Sagbladregistrering"
          text1="Når sagbladene er slipt så mange ganger at det ikke er igjen noe hardmetall tenner så sendes bladene til omlodding. Restene av de gamle fjernes og nye hardmetallklosser loddes på. Etter 3-5 ganger med omlodding så er stammen på sagbladene slitne og ustabile i saga. I sagbladsortimentet vi har så er det flere hundre blad og for å ha kontroll på hvor mange ganger et blad er omloddet så må man ha et system."
          img1={blade_id}
          imgSize="100%"
          text2="Et system som er blitt brukt er å gravere inn et kryss hver gang det har vært på omlodding. Men dette viser ikke når et blad ble omloddet sist. Den informasjonen har vi noen ganger hatt bruk for hvis det er noe feil med service på et parti fra leverandør, da kan vi finne ut når de ble omloddet og se hvilke andre blad som er fra samme parti. For å løse dette så tenkte jeg på å få dette i en database for jeg hadde lagt merke til at bladene vi kjøper fra japanske Kanefusa har id nummer. Da kan jeg bruke det nummeret til å registrere de i en database."
          header2="Web applikasjon"
          text3="I begynnelsen blir det prøvd Microsoft Excel, men det blir til slutt lagd en appliaksjon med Microsoft Access. Det blir brukt i noen år før jeg lager programmet som en webapplikasjon. Dette gjør det mulig å få tilgang på data fra andre datamaskiner og mobiler. Nettsiden har database og inlogging. Det er derfor ikke mulig å gå til nettsiden å se."
          img3={sagbladregister1}
        />
      </div>
      <style jsx>{`
        .container {
          grid-area: content;
        }
      `}</style>
    </>
  );
};

export default SagbladregisterMainPage;
