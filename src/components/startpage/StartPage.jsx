import React from "react";
import ImageSection from "./ImageSection";
import InfoSection from "./InfoSection";
import InfoSection2 from "./InfoSection2";
import TextSection from "./TextSection";

const StartPage = () => {
  return (
    <>
      <div className="container">
        <ImageSection />
        <TextSection />
        <InfoSection2 />
        <InfoSection />
      </div>
      <style jsx>{`
        .container {
          grid-area: content;
        }
      `}</style>
    </>
  );
};

export default StartPage;
