import { Link } from "react-router-dom";
import styled, { css } from "styled-components"

export const logoStyle = css`
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  align-items: center;
  text-decoration: none;
`;

export const StyledLogo = styled(Link)`
  ${logoStyle}

  &:hover {
  text-decoration: none;
  }
`;

export const StyledLogoMain = styled.span`
  ${logoStyle}
`;

export const Text = styled.span`
  font-size: 32px;
  line-height:115%;
  font-weight: bold;
  color: ${(props) => props.theme.colorBlackForText};
`