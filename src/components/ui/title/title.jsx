import React from "react";
import "./title.css"

export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  DEFAULT: ""
};

function Title({ children, size }) {
  let TagName;
  switch (size) {
    case TitleSize.BIG:
      TagName = "h1";
      break;
    case TitleSize.SMALL:
      TagName = "h3";
      break;
    default:
      TagName = "h2";
  }

  return <TagName className={`title${size ? ` title_${size}` : ""}`
  }> {children}</TagName>;
}

export default Title;