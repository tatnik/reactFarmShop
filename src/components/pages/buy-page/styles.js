import styled from "styled-components";
import Section from "../../styled/section/section";


export const StyledSection = styled(Section)`
  display:grid;
  grid-template-columns: 1fr 2fr;
  padding: 40px ${(props) => props.theme.pagePadding};
  background-color: ${(props) => props.theme.colorGray};
` 