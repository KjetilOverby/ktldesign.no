import Image from "next/image";
import React from "react";
import person from "../../../assets/profile3.jpg";
const AboutSection = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1 className="header">KTL DESIGN</h1>
          <p>
            Ktl Design drives kun av en person, og er ikke registrert som
            bedrift. Foreløpig er det kun en hobby og hobbyinntekter. Regninger
            sendes likevel ut med faktura. Jeg bruker et fakturaprogram fra
            Systima slik at fakturaen blir registrert hos myndighetene.
          </p>
          <p>
            Mitt navn er Kjetil Øverby og jeg er 41 år gammel. Jeg har 100% jobb
            som sliper på et sagbruk og web design er min hobby. Jeg har drevet
            med webdesign siden februar 2018.
          </p>
        </div>
        <div className="imgContainer">
          <Image className="img" src={person} />
        </div>
      </div>
      <style>{`
          .container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
            grid-column-gap: 5rem;
          }
        .header {
            font-size: 3rem;
            margin: 0;
            font-weight: 100;
            
        }
       
        .imgContainer {
      
        }
        @media screen and (max-width: 700px ) {
          .container {
            grid-column-gap: 0;
            grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
          }
        }

    `}</style>
    </>
  );
};

export default AboutSection;
