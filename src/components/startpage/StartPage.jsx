import React from "react";
import ImageSection from "./ImageSection";
import InfoSection from "./InfoSection";
import InfoSection2 from "./InfoSection2";
import InfoSection3 from "./InfoSection3";
import TextSection from "./TextSection";

const StartPage = () => {
  return (
    <>
      <div className="container">
        <ImageSection />
        <TextSection />
        <InfoSection2 />
        <InfoSection />
        <InfoSection3 />
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
