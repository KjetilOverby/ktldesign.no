import React from "react";
import ImageHeader from "../common/ImageHeader";
import VerkstedSection from "../verksted/VerkstedSection";

const VerkstedPage = () => {
  return (
    <>
      <div className="container">
        <ImageHeader />
        <VerkstedSection />
      </div>
      <style jsx>{`
        .container {
          grid-area: content;
        }
      `}</style>
    </>
  );
};

export default VerkstedPage;
