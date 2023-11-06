import React from "react";
import { StyledButton } from "./styles";

function Button({ children, minWidth, link, className, type, ...rest }) {
  return (
    <StyledButton
      $minWidth={minWidth}
      {...(link ? { to: link } : { as: "button", type: (type || "button") })}
      className={className}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default Button;