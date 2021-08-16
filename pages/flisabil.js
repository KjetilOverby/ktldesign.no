import React from "react";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import PageLayout from "../src/components/common/PageLayout";
import FlisabilMainPage from "../src/components/flisabil/FlisabilMainPage";

const flisabil = () => {
  return (
    <PageLayout>
      <HeaderComponent background={"var(--primary)"} />
      <FlisabilMainPage />
      <FooterComponent />
    </PageLayout>
  );
};

export default flisabil;
