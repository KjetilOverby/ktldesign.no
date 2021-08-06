import React from "react";
import Iframe from "react-iframe";
import ImageHeader from "../common/ImageHeader";

const BruktbilerPage = () => {
  return (
    <>
      <div className="main-container">
        <ImageHeader
          header="BRUKTBILER"
          image="https://images.unsplash.com/photo-1535536556086-bc8a2b823706?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        />
        <div className="container">
          <div className="iframe-container">
            <h1 className="header">Våre bruktbiler</h1>
            <Iframe
              url="https://www.finn.no/pw/search/car-norway?orgId=1336657620"
              id="myId"
              width="100%"
              height="100%"
              className="i-frame"
              display="initial"
              position="relative"
              frameBorder="0"
            />
          </div>
          <div className="text-container">
            <h1 className="header">Kjøpe bruktbil?</h1>
            <p className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              aliquam vel facilis unde odio cum, tenetur voluptatum dolores in
              est, temporibus soluta impedit at quam autem necessitatibus,
              obcaecati accusantium asperiores?
            </p>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              voluptates voluptatum ad repudiandae eligendi repellat doloremque
              temporibus deleniti. Necessitatibus repudiandae optio quam
              doloremque animi consectetur voluptatem. Rem, inventore deserunt?
              Atque!
            </p>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              corporis dicta, commodi aliquid nostrum quos rem facilis
              exercitationem, totam reprehenderit quis in quisquam sapiente
              recusandae, voluptatem unde ipsum eaque animi. Impedit nesciunt
              placeat rem quisquam totam magnam, voluptates, libero quam nostrum
              harum nemo. Saepe architecto enim voluptatem? Aliquam dolore
              voluptas vitae esse eligendi, quia praesentium, totam, delectus
              aperiam quam repudiandae!
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 25rem 1fr 1fr 25rem;
          grid-template-rows: 90vh;
          grid-column-gap: 5rem;
          grid-template-areas: ". fr tx .";
        }
        .header {
          margin: 5rem 0;
        }
        .main-container {
          grid-area: content;
        }
        .iframe-container {
          width: 100%;
          height: 80%;
          grid-area: fr;
        }

        .text-container {
          grid-area: tx;
        }
        @media screen and (max-width: 2100px) {
          .container {
            grid-template-columns: 12rem 1fr 1fr 12rem;
          }
        }
        @media screen and (max-width: 1740px) {
          .container {
            grid-template-columns: 8rem 1fr 1fr 8rem;
          }
        }
        @media screen and (max-width: 1500px) {
          .container {
            grid-template-columns: 4rem 1fr 1fr 4rem;
          }
        }
        @media screen and (max-width: 1200px) {
          .container {
            grid-template-columns: 1rem 1fr 1fr 1rem;
          }
        }
        @media screen and (max-width: 1000px) {
          .container {
            grid-template-columns: 1rem 1fr 1fr 1rem;
            grid-template-rows: 80rem auto;
            grid-column-gap: 0;
            grid-template-areas:
              ". fr fr ."
              ". tx tx .";
          }
          .text-container {
            margin-top: -5rem;
            margin-bottom: 3rem;
          }
        }
      `}</style>
    </>
  );
};

export default BruktbilerPage;
