import styled from "styled-components";

export const StyledAdvantageCard = styled.article`
  height: 100%;
  padding: ${(props) => props.theme.indent};
  display: flex;
  flex-direction: column;
  row-gap: ${(props) => props.theme.indent};
  background-color: ${(props) => props.$colorBg};
  box-sizing: border-box;
`;


export const AdvantageCardText = styled.p`
margin - top: 7px;
margin - bottom: 0;
`;
