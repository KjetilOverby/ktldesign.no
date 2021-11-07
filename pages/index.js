import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import PageLayout from "../src/components/common/PageLayout";
import StartPage from "../src/components/startpage/StartPage";
import ReactGA from "react-ga";

export default function Home() {
  useEffect(() => {
    ReactGA.initialize("UA-165295838-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <PageLayout>
      <Head>
        <title>KTL DESIGN</title>
        <meta name="description" content="Web design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent background={"var(--primary)"} />
      <StartPage />
      <FooterComponent />
    </PageLayout>
  );
}
