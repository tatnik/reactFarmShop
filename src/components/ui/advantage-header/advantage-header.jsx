import React from "react";
import "./advantage-header.css"
import Title, { TitleSize } from "../title/title";


function AdvantageHeader({ header, label, image, colorBg, colorLabel, }) {

  return (
    <header className="advantage-header" >
      <Title size={TitleSize.SMALL}>{header}</Title>
      <span className="advantage-header__label" style={{ backgroundColor: colorLabel }}>{label}</span>
      <img
        src={image}
        className="advantage-header__image"
        width={52}
        height={52}
        alt="изображение еды"
      />
    </header>
  );
}

export default AdvantageHeader;