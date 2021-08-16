import React from "react";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import PageLayout from "../src/components/common/PageLayout";
import SagbladregisterMainPage from "../src/components/sagbladregister/SagbladregisterMainPage";

const sagbladregister = () => {
  return (
    <PageLayout>
      <HeaderComponent background={"var(--primary)"} />
      <SagbladregisterMainPage />
      <FooterComponent />
    </PageLayout>
  );
};

export default sagbladregister;
