import React from "react";
import ImageHeader from "../common/ImageHeader";
import KontaktTextComponent from "./KontaktTextComponent";

const KontaktPage = () => {
  return (
    <>
      <div className="container">
        <ImageHeader image="https://images.unsplash.com/photo-1462556791646-c201b8241a94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1345&q=80" />
        <KontaktTextComponent />
      </div>
      <style jsx>{`
        .container {
          grid-area: content;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
};

export default KontaktPage;
