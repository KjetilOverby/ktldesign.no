import React from "react";

import map from "../../../assets/map.png";
import Image from "next/image";

const MapSection = () => {
  return (
    <div>
      <a href="https://www.google.no/maps/place/Flisa+Bil/@60.6138714,12.0084165,17z/data=!4m5!3m4!1s0x46420d1363cca735:0x57cd7e872cda61dd!8m2!3d60.6138047!4d12.0069314?hl=no">
        <Image src={map} />
      </a>
    </div>
  );
};

export default MapSection;