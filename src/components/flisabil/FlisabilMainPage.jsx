import React from "react";
import SectionLayoutSingle from "../common/SectionLayoutSingle";
import bil from "../../../assets/flisabil/bil.png";

const FlisabilMainPage = () => {
  return (
    <>
      <div className="container">
        <SectionLayoutSingle
          header="Flisa Bil"
          text1="Flisa Bil hadde en nettside som var nesten ubrukelig på mobil hvis man ikke zoomet innholdet. Det var også svært lite innhold på siden, så vi har fått mer innhold på nettsiden."
          img1={bil}
          text2="Jeg har laget flere utgaver av nettsiden. Den tredje ble til slutt publisert og den fjerde er nå under utvikling. Nettsiden til Flisa Bil er"
          atag1="flisabil.no"
          link1="https://www.flisabil.no/"
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

export default FlisabilMainPage;
