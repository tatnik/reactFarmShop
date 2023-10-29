import styled from "styled-components";

export const StyledButton = styled.a`
  display: block;
  min-width: ${(props) => props.$minWidth ? `${props.$minWidth}px` : "100%"};
  max-width: 700px;
  min-height: 60px;
  padding: 0px 24px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colorForButton};
  color: ${(props) => props.theme.colorWhite};
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize};
  font-family: inherit; 
  border: none;


  &:hover{
    background: ${(props) => props.theme.colorForButtonHover} ;
    box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.14) inset;
    cursor:pointer;
  }

  &:active{
    background:${(props) => props.theme.colorForButtonHover};
    cursor:pointer;
  }
`;