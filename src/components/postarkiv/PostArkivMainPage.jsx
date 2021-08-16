import React from "react";
import SectionLayoutSingle from "../common/SectionLayoutSingle";
import postuttak from "../../../assets/postarkiv/postuttak.jpg";
import illustration from "../../../assets/postarkiv/illustration.png";
import mkv from "../../../assets/postarkiv/mkv.jpg";
import post from "../../../assets/postarkiv/post.png";

const PostArkivMainPage = () => {
  return (
    <>
      <div className="container">
        <SectionLayoutSingle
          header="Postarkiv"
          text1="Postarkiv er et program til å regne ut utfylling for å få sentrert posten på en hylse. Man legger inn hvilke tykkelser plankene skal ha, hvilke sagbladtykkelse man skal bruke og da regner programmet automatisk ut hva utfyllinge foran blir for å sentrere posten. Også utfylling bak sånn at mutterne som skal dras igjen havner på akkurat det samme stedet uansett hvilke dimensjoner som er lagt inn."
          img1={postuttak}
          text2="Det begynte i April 2016, da lagde jeg en post-kalkulator i Microsoft Excel (før jeg hadde begynt med programmering).

          I det originale utregningsprogrammet som er med i saglinja regner kun ut utfylling foran, og man må opp til saghuset og få det printet ut på papir for å så regne ut hvilke ringer som skal brukes. På denne tiden var det mye testing med nye mål og vi måtte stadig få nye post utskrifter. Jeg etterspurte programmet som de bruker på saga til sliperiet så vi kunne lage disse postene selv, men det ble aldri noe av. Det var da jeg kom på ideen om å lage et eget utregningsprogram så man kan bare lage postene selv og lagre dem så de blir enklere å finne. Dette Excelprogrammet erstatter det gamle systemet. Det blir brukt i nesten 4 år før et nytt program blir til."
          img2={illustration}
          text3="Jeg har lagd 2 utgaver av Postarkiv. Den første utgaven var ikke responsiv, dvs at den er ubrukelig på mindre skjermer som mobiler og nettbrett. Dette ville jeg gjøre noe med. Jeg gjorde et forsøk på å implementere det i den første utgaven av Postarkiv. Men fant fort ut at når det ikke er gjort fra begynnelsen så ble det mer jobb å bli ferdig med den enn å begynne helt på nytt. Etter at jeg hadde begynt med den nye appen så lærer jeg litt om backend koding også, for å bruke databaser blant annet. Jeg bestemmer meg for å koble til en database så man kan lage nye poster å lagre dem rett fra programmet. Da må jeg også få på plass innlogging for å unngå at uautoriserte får tilgang til manipulering av data."
          img3={post}
          img4={mkv}
        />
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
