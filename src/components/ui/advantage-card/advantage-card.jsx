import React from "react";

import "./advantage-card.css"
import AdvantageHeader from "../advantage-header/advantage-header";

const AdvantageFeature = {
  FARM: "farm",
  SHOP: "shop"
}

function AdvantageCard({ header, image, text, feature }) {

  let options;
  switch (feature.toLowerCase()) {
    case AdvantageFeature.FARM:
      options = {
        text: "Фермерские продукты",
        colorBg: "#E1EDCE",
        colorLabel: "#88AA4D"
      }
      break;
    case AdvantageFeature.SHOP:
      options = {
        text: "Магазинные продукты",
        colorBg: "#F8DDD7",
        colorLabel: "#F75531"
      }
      break;
    default:
      options = {
        text: "",
        color: "#000"
      }
  }
  return (
    <article className="advantage-card" style={{ backgroundColor: options.colorBg }}>
      <AdvantageHeader
        label={options.text}
        header={header}
        image={image}
        colorLabel={options.colorLabel}
        colorBg={options.colorBg}
      />
      <p className="advantage-card__text">
        {text}
      </p>
    </article>
  );
}

export default AdvantageCard;