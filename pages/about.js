import React from "react";
import HeaderComponent from "../src/components/common/HeaderComponent";
import PageLayout from "../src/components/common/PageLayout";
import FooterComponent from "../src/components/common/FooterComponent";
import AboutMainPage from "../src/components/about/AboutMainPage";

const about = () => {
  return (
    <>
      <PageLayout>
        <HeaderComponent background={"var(--primary)"} />
        <AboutMainPage />
        <FooterComponent />
      </PageLayout>
      <style jsx>{``}</style>
    </>
  );
};

export default about;
