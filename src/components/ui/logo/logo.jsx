import React from "react";
import { ReactComponent as LogoImage } from "../../../../src/assets/logo.svg"
import { StyledLogo, StyledLogoMain, Text } from "./styles";
import { useLocation } from "react-router-dom";
import { AppRoute } from "../../../consts";

function Logo() {
  const { path } = useLocation();
  return (
    path === AppRoute.MAIN ? (
      <StyledLogoMain >
        <LogoImage />
        <Text>
          Фермерские продукты
        </Text>
      </StyledLogoMain>
    ) : (
      <StyledLogo to={AppRoute.MAIN} >
        <LogoImage />
        <Text>
          Фермерские продукты
        </Text>
      </StyledLogo>
    )
  );
}

export default Logo;