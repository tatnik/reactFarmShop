import styled from "styled-components";
import Section from "../../styled/section/section";

export const StyledSection = styled(Section)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  margin: 0 auto;
  height: ${(props) => props.theme.footerHeight};
  padding-top: 0;
  padding-bottom: 0;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colorWhite};
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.10);
`