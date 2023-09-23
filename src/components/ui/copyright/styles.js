import styled from "styled-components";

export const StyledCopyright = styled.span`
  min-height: 43px;
  min-width: 148px;
  max-width: 700px;
  padding: 8px 12px;
  font-size:  ${(props) => props.theme.fontSize};
  background-color: transparent;
  border-radius: 5px;
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box; 
`;