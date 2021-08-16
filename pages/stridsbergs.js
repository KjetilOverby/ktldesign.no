import React from "react";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import PageLayout from "../src/components/common/PageLayout";
import StridsbergsMainPage from "../src/components/stridsbergs/StridsbergsMainPage";

const Stridsbergs = () => {
  return (
    <div>
      <PageLayout>
        <HeaderComponent background={"var(--primary)"} />
        <StridsbergsMainPage />
        <FooterComponent />
      </PageLayout>
    </div>
  );
};

export default Stridsbergs;
