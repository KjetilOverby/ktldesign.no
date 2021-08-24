import React from "react";
import SectionLayoutSingle from "../common/SectionLayoutSingle";
import ImageDisplay from "../common/ImageDisplay";
import front from "../../../assets/sagbladregister2/front.png";
import result from "../../../assets/sagbladregister2/result.png";
import newblade from "../../../assets/sagbladregister2/newblades.png";
import cloud from "../../../assets/sagbladregister2/cloud.jpg";

const Sagbladregister2MainPage = () => {
  return (
    <>
      <div className="container">
        <SectionLayoutSingle
          header="Sagbladregister 2"
          text1="En ny versjon av sagbladregister blir lagd med litt annen type teknologi. Prosjektet bruker fortsatt den samme databasen så data trenger man ikke å legge inn på nytt. Denne nettsiden har innlogging og uautoriserte får ikke tilgang til å se nettsiden."
          img1={cloud}
          imgSize="60%"
          text2="Her lagres alle omloddinger på alle blad. Det har også blitt mere statistikk som hvor mange nye blad som har blitt kjøpt og hvor mange blad som har blitt vraket. "
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
