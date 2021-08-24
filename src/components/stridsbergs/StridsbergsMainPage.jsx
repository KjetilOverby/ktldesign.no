import React from "react";
import SectionLayoutSingle from "../common/SectionLayoutSingle";
import blades from "../../../assets/stridsbergs/sawblades.jpg";

const StridsbergsMainPage = () => {
  return (
    <>
      <div className="container">
        <SectionLayoutSingle
          header="Kvarnstrands & Stridsbergs"
          text1="Kvarnstrands & Stridsbergs har som mange andre en nettside som ikke er så mobilvennlig. Det er også flere steder der det ikke ser helt bra ut også på pc skjermer."
          img1={blades}
          imgSize="50%"
          text2="Kvarnstrands & Stridsbergs har fortsatt den nettsiden som ikke er helt optmal den kan du gå inn å se på her: "
          atag1="stridsbergs.no"
          link1="https://www.stridsberg.no/"
          text3="Her er en link til nettsiden som fortsatt er under utvikling. Det er fortsatt en del eksempelbilder som skal byttes ut, det skal etterhvert tas nye bilder til nettsiden. Se på forløpig resultat av nettsiden"
          atag2="her"
          link2="https://stridsbergs3.vercel.app/"
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

export default StridsbergsMainPage;
