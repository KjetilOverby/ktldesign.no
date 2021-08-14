import React from "react";
import PageLayout from "../src/components/common/PageLayout";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import ProsjekterMainPage from "../src/components/prosjekter/ProsjekterMainPage";

const prosjekter = () => {
  return (
    <PageLayout>
      <HeaderComponent
        background={"var(--prosjekt-header)"}
        shadow="1px solid rgba(0,0,0,.1)"
      />
      <ProsjekterMainPage />
      <FooterComponent />
    </PageLayout>
  );
};

export default prosjekter;
