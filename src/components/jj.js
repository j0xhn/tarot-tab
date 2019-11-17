import React from "react";

import Card from "./card";

const imageUrl = `https://www.biddytarot.com/wp-content/uploads/2018/06/ET-PENTACLES-06.jpg`;

const JD = ({img, name, url, about}) => {
  return (
    <div className="Aligner column">
      <div className="Aligner">
        <Card
          img={imageUrl}
        />
      </div>
    </div>
  );
};

export default JD;
