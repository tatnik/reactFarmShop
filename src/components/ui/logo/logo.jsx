import React from "react";
import logo from "../../../../src/assets/logo.svg"
import "./logo.css"

function Logo({src,text}) {
  return (
  <a href="/" className="logo__link">
    <img className="logo__img"
      src={logo}
      alt="логотип"
      width="60"
      height="60"
      />
    <span className="logo__text">
      Фермерские продукты
    </span>
  </a>
  );
}

export default Logo;