import React from "react";

const ImageHeader = ({ header, image }) => {
  return (
    <>
      <div className="container">
        <h1 className="header">{header}</h1>
      </div>
      <style jsx>{`
        .container {
          background: linear-gradient(
              to right,
              rgba(39, 107, 121, 0),
              rgba(39, 107, 121, 0)
            ),
            url(${image});
          height: 40rem;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 0 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .header {
          font-size: 5rem;
          color: #fff;
          font-weight: 200;
        }
        @media screen and (max-width: 2100px) {
          .container {
            height: 30rem;
          }
        }
        @media screen and (max-width: 1500px) {
          .container {
            height: 10rem;
          }
        }
        @media screen and (max-width: 1100px) {
          .container {
            height: 8rem;
          }
        }
        @media screen and (max-width: 756px) {
          .container {
            height: 8rem;
          }
          .header {
            font-size: 3rem;
          }
        }
      `}</style>
    </>
  );
};

export default ImageHeader;
// https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80
