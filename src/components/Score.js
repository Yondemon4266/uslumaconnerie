import React from "react";
import { Rating } from "react-simple-star-rating";
const Score = () => {
  return (
    <div className="avis">
      <Rating
        initialValue="0"
        disableFillHover
        allowHover="false"
        tooltipClassName="custom-tooltip"
        allowFraction
        fillColor="#2F52A2"
        showTooltip
        tooltipDefaultText="0"
        size="30"
      />
      <br/>
      <a href="">Déposer un avis</a>
    </div>
  );
};

export default Score;
