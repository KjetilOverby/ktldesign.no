import React from "react";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import PageLayout from "../src/components/common/PageLayout";
import SagbladoversiktMainPage from "../src/components/sagbladoversikt/SagbladoversiktMainPage";

const sagbladoversikt = () => {
  return (
    <div>
      <PageLayout>
        <HeaderComponent background={"var(--primary)"} />
        <SagbladoversiktMainPage />
        <FooterComponent />
      </PageLayout>
    </div>
  );
};

export default sagbladoversikt;
