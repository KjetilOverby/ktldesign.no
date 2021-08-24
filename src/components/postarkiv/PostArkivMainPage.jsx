import React from "react";
import SectionLayoutSingle from "../common/SectionLayoutSingle";
import postuttak from "../../../assets/postarkiv/postuttak.jpg";
import illustration from "../../../assets/postarkiv/illustration.png";
import mkv from "../../../assets/postarkiv/mkv.jpg";
import post from "../../../assets/postarkiv/post.png";
import post1 from "../../../assets/postarkiv/post1.png";
import post2 from "../../../assets/postarkiv/post2.png";
import post3 from "../../../assets/postarkiv/post3.png";
import post4 from "../../../assets/postarkiv/post4.png";
import ImageDisplay from "../common/ImageDisplay";

const PostArkivMainPage = () => {
  return (
    <>
      <div className="container">
        <SectionLayoutSingle
          header="Postarkiv"
          text1="Postarkiv er et program til en saglinje av produsenten Linck. Den er til å regne ut utfylling for å få sentrert sagblader og ringer på en hylse. Man legger inn hvilke tykkelser plankene skal ha, hvilke sagbladtykkelse man skal bruke og da regner programmet automatisk ut hva utfyllinge foran blir for å sentrere posten. Også utfylling bak sånn at mutterne som skal dras igjen kommer på samme posisjon uansett hvilke dimensjoner som blir lagt inn. Dersom posisjonen på mutterne ikke er der de skal så kan man være sikker på at det er en feil ring et sted."
          img1={postuttak}
          imgSize="40rem"
          imgSize2="30rem"
          text2="Det begynte i April 2016, da lagde jeg en post-kalkulator i Microsoft Excel (før jeg hadde begynt med programmering).

          I det originale utregningsprogrammet som er med i saglinja regner kun ut utfylling foran, og man må opp til saghuset og få det printet ut på papir for å så regne ut hvilke ringer som skal brukes. På denne tiden var det mye testing med nye mål og vi måtte stadig få nye post utskrifter. Jeg etterspurte programmet som de bruker på saga til sliperiet så vi kunne lage disse postene selv, men det ble aldri noe av. Det var da jeg kom på ideen om å lage et eget utregningsprogram så man kan bare lage postene selv og lagre dem så de blir enklere å finne. Dette Excelprogrammet erstatter det gamle systemet. Det blir brukt i nesten 4 år før et nytt program blir til."
          img2={illustration}
          text3="Jeg har lagd 2 utgaver av Postarkiv. Den første utgaven var ikke responsiv, dvs at den er ubrukelig på mindre skjermer som mobiler og nettbrett. Dette ville jeg gjøre noe med. Jeg gjorde et forsøk på å implementere det i den første utgaven av Postarkiv. Men fant fort ut at når det ikke er gjort fra begynnelsen så ble det mer jobb å bli ferdig med den enn å begynne helt på nytt. Etter at jeg hadde begynt med den nye appen så lærer jeg litt om backend koding også, for å bruke databaser blant annet. Jeg bestemmer meg for å koble til en database så man kan lage nye poster å lagre dem rett fra programmet. Da må jeg også få på plass innlogging for å unngå at uautoriserte får tilgang til manipulering av data."
          img3={post}
        />
        <ImageDisplay img1={mkv} />
        <ImageDisplay img1={post1} />
        <ImageDisplay img1={post2} />
        <ImageDisplay img1={post3} />
        <ImageDisplay img1={post4} />
      </div>
      <style jsx>{`
        .container {
          grid-area: content;
        }
      `}</style>
    </>
  );
};

export default PostArkivMainPage;
