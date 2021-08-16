import React from "react";
import PageLayout from "../src/components/common/PageLayout";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import PostArkivMainPage from "../src/components/postarkiv/PostArkivMainPage";

const postarkiv = () => {
  return (
    <PageLayout>
      <HeaderComponent background="var(--primary)" />
      <PostArkivMainPage />
      <FooterComponent />
    </PageLayout>
  );
};

export default postarkiv;
