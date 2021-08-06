import React from "react";

import map from "../../../assets/map.png";
import Image from "next/image";

const MapSection = () => {
  return (
    <>
      <div className="container">
        <a href="https://www.google.com/maps/place/Melby+Bilsalg/@60.3940401,11.2189639,15z/data=!4m5!3m4!1s0x0:0xd3219d9631996fee!8m2!3d60.3940203!4d11.2189759">
          <Image src={map} />
        </a>
      </div>
      <style jsx>{`
        .container {
          width: 100vw;
        }
      `}</style>
    </>
  );
};

export default MapSection;
