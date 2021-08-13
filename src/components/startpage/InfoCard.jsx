import React from "react";

const InfoCard = ({ icon, header, text }) => {
  return (
    <>
      <div className="container">
        <div className="icon-container">{icon}</div>
        <div className="text-container">
          <h1 className="info-header">{header}</h1>
          <p className="text">{text}</p>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .icon-container {
          height: 5rem;
        }
        .info-header {
          font-size: 1.3rem;
          font-weight: 400;
        }
        .text {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .text-container {
          display: grid;
          place-items: center;
        }
      `}</style>
    </>
  );
};

export default InfoCard;
