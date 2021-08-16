import React from "react";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import PageLayout from "../src/components/common/PageLayout";
import Sagbladregister2MainPage from "../src/components/sagbladregister2/Sagbladregister2MainPage";

const sagbladregister2 = () => {
  return (
    <div>
      <PageLayout>
        <HeaderComponent background={"var(--primary)"} />
        <Sagbladregister2MainPage />
        <FooterComponent />
      </PageLayout>
    </div>
  );
};

export default sagbladregister2;
