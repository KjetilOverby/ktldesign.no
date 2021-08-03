import React from "react";
import ImageSection from "./ImageSection";
import LogoSection from "./LogoSection";
import TextSection from "./TextSection";

const StartPage = () => {
  return (
    <>
      <div className="container">
        <ImageSection />
        <TextSection />
        <LogoSection />
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
