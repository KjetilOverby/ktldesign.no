import React from "react";
import SectionLayoutSingle from "../common/SectionLayoutSingle";
import charts from "../../../assets/sagbladoversikt/charts.jpg";

const SagbladoversiktMainPage = () => {
  return (
    <>
      <div className="container">
        <SectionLayoutSingle
          header="Sagbladoversikt"
          text1="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quidem voluptas at, atque tempore ipsum possimus nulla accusantium quis rem? Distinctio in quaerat delectus nihil consectetur. Modi recusandae aspernatur molestias.
Praesentium ipsa fugit labore asperiores quasi? Dolor nesciunt voluptatibus nihil exercitationem fuga illum reprehenderit, facere eum assumenda deserunt aspernatur accusamus similique! Delectus consequatur officiis iure consectetur at! Ipsum, nobis vel."
          img1={charts}
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

export default SagbladoversiktMainPage;
