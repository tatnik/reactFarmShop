import React from "react";
import Logo from "../../ui/logo/logo";
import Copyright from './../../ui/copyright/copyright';
import { StyledSection } from "./styles";

function Footer() {
  return (
    <StyledSection as="footer">
      <Logo />
      <Copyright />
    </StyledSection>
  );
}

export default Footer;