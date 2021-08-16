import React from "react";
import SectionLayoutSingle from "../common/SectionLayoutSingle";

const Sagbladregister2MainPage = () => {
  return (
    <>
      <div className="container">
        <SectionLayoutSingle header="Sagbladregister 2" />
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
