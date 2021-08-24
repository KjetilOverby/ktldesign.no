import React from "react";
import SectionLayoutSingle from "../common/SectionLayoutSingle";
import charts from "../../../assets/sagbladoversikt/charts.jpg";
import overview from "../../../assets/sagbladoversikt/overview.png";
import date from "../../../assets/sagbladoversikt/date.png";
import omlodd from "../../../assets/sagbladoversikt/omlodd.png";
import ImageDisplay from "../common/ImageDisplay";

const SagbladoversiktMainPage = () => {
  return (
    <>
      <div className="container">
        <SectionLayoutSingle
          header="Sagbladoversikt"
          text1="Sagbladoversikt ble laget for verktøyleverandør så de kan se hvor mye blad som er vraket i løpet av en periode. De kan da sende tilsvarende antall nye blad for den perioden. Dette gjør at bladene ikke trenger å bestilles og at det ikke blir alt for mye blad på lager."
          img1={charts}
          imgSize="100%"
        />
        <ImageDisplay img1={overview} />
        <ImageDisplay img1={date} />
        <ImageDisplay img1={omlodd} />
      </div>
      <style jsx>{`
        .container {
          grid-area: content;
        }
      `}</style>
    </>
  );
};

export default SagbladoversiktMainPage;
