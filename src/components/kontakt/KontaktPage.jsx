import React from "react";
import MapSection from "./MapSection";
import ImageHeader from "../common/ImageHeader";
import KontaktTextComponent from "./KontaktTextComponent";

const KontaktPage = () => {
  return (
    <>
      <div className="container">
        <ImageHeader
          header="KONTAKT OSS"
          image="https://lh3.googleusercontent.com/pw/AM-JKLXHSEdjHQsP9_tMV_NgwXheSUeWaBZ3eKkX6Qc3o8ZGYqumniZyRnREFMBE_OD7djLbORgOt2Cv1mKeEcnyIYQFdWGlLgSvYchz6JtVYAlxSv-x11O2auDSPPyOJwcEvACmz2renfR_2gi4Sxj32pdY=w1440-h1080-no?authuser=0"
        />
        <KontaktTextComponent />
        <MapSection />
      </div>
      <style jsx>{`
        .container {
          grid-area: content;
        }
      `}</style>
    </>
  );
};

export default KontaktPage;
