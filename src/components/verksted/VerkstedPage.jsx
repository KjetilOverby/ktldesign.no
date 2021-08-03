import React from "react";
import ImageHeader from "../common/ImageHeader";
import VerkstedSection from "../verksted/VerkstedSection";

const VerkstedPage = () => {
  return (
    <>
      <div className="container">
        <ImageHeader
          header="VERKSTED"
          image="https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
        />
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
