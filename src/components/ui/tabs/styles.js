import styled from "styled-components";
import Title from './../title/title';


export const TitleList = styled.div`
  display: inline-flex;
  overflow: hidden;
  
`;

export const TitleButton = styled.button`
  display: block;
  padding: 8px 12px;
  border: ${(props) => props.theme.boxBorder};
  margin-right: 8px;
  cursor: pointer;
  box-shadow: none;
  background-color: ${(props) => (props.$isActive ? props.theme.colorForGoodBG : props.theme.colorGray)};
  
`;

export const TitleText = styled(Title)`
  font-weight: 400;
  color: ${(props) => (props.$isActive ? props.theme.colorWhite : props.theme.colorBlackForText)};
`;

export const Content = styled.div`
  border: none;
  line-height: 1.5;
  font-size: 14px;
  box-sizing: border-box;
  text-align: left;
`;
