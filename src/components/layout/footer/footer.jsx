import React from "react";
import Logo from "../../ui/logo/logo";
import Copyright from './../../ui/copyright/copyright';
import "./footer.css"

function Footer() {
  return (
    <footer className="footer">
      <Logo/>
      <Copyright/>
    </footer>
  );
}

export default Footer;