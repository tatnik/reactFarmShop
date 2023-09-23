import styled from "styled-components"

export const StyledAdvantageHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  max-height: 58px;
  row-gap: 4px;
  column-gap: ${(props) => props.theme.indent};
  font-size: ${(props) => props.theme.fontSize};
  line-height: 27px;
  font-weight: 700;
  box-sizing: border-box;
`;


export const Label = styled.span`
  padding-left: 10px;
  padding-right: 10px;
  order: -1;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  background-color:${(props) => props.$colorLabel};
`;

export const HeaderImage = styled.img`
  padding-top: 2px;
  padding-bottom: 2px;
  width: 52px;
  height: 52px;
  order: -2;
  box-sizing: border-box;
`;

