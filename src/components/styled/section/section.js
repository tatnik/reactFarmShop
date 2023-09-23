import styled from "styled-components";

const Section = styled.section`
  position: relative;
  display: flex;
  padding-right: ${(props) => props.theme.pagePadding};
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 100px;
  padding-bottom: 100px;
  box-sizing: border-box;
  width: ${(props) => props.theme.pageWidth};
`;

export default Section;