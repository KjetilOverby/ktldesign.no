import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import PageLayout from "../src/components/common/PageLayout";
import StartPage from "../src/components/startpage/StartPage";

export default function Home() {
  return (
    <PageLayout>
      <Head>
        <title>ktl_design</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent background={"var(--primary)"} />
      <StartPage />
      <FooterComponent />
    </PageLayout>
  );
}
