import React from "react";
import ImageSection from "./ImageSection";
import TextSection from "./TextSection";

const StartPage = () => {
  return (
    <>
      <div className="container">
        <ImageSection />
        <TextSection />
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
