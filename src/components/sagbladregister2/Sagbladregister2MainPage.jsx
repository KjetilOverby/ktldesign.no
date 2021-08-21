import React from "react";
import SectionLayoutSingle from "../common/SectionLayoutSingle";
import ImageDisplay from "../common/ImageDisplay";
import front from "../../../assets/sagbladregister2/front.png";
import result from "../../../assets/sagbladregister2/result.png";
import newblade from "../../../assets/sagbladregister2/newblades.png";

const Sagbladregister2MainPage = () => {
  return (
    <>
      <div className="container">
        <SectionLayoutSingle
          header="Sagbladregister 2"
          text1="En ny versjon av sagbladregister blir lagd med litt annen type teknologi. Prosjektet bruker fortsatt den samme databasen så data trenger man ikke å legge inn på nytt"
        />
        <ImageDisplay img1={front} />
        <ImageDisplay img1={result} />
        <ImageDisplay img1={newblade} />
      </div>
      <style jsx>{`
        .container {
          grid-area: content;
        }
      `}</style>
    </>
  );
};

export default Sagbladregister2MainPage;
