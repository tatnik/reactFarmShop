import styled from "styled-components"

export const StyledLogo = styled.a`
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  align-items: center;
  text-decoration: none;

  &:hover {
  text-decoration: none;
  }
`


export const Text = styled.span`
  font-size: 32px;
  line-height:115%;
  font-weight: bold;
  color: ${(props) => props.theme.colorBlackForText};
`