import React from "react";
import "./styles.js"
import Title, { TitleSize } from "../title/title";
import { HeaderImage, Label, StyledAdvantageHeader } from "./styles.js";


function AdvantageHeader({ header, label, image, colorBg, colorLabel, }) {

  return (
    <StyledAdvantageHeader>
      <Title size={TitleSize.SMALL} level="3">{header}</Title>
      <Label $colorLabel={colorLabel}>{label}</Label>
      <HeaderImage
        src={image}
        width={52}
        height={52}
        alt="изображение еды"
      />
    </StyledAdvantageHeader>
  );
}

export default AdvantageHeader;