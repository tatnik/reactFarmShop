import styled, { css } from "styled-components";

const gridList = css`
  margin-left: 0;
  margin-top: 0;
  font-size: 0;
  line-height: 0;
  text-align: ${(props) => props.$align || "center"};

  li {
    display: inline-block;
    margin-left: 0;
    margin-top: 0;
    font-size: ${(props) =>
    props.$fontSize ? `${props.$fontSize}px` : props.theme.fontSize};
    line-height: ${(props) =>
    props.$lineHeight ? `${props.$lineHeight}px` : "27px"};
    vertical-align: top;
  }
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  ${(props) => (props.$isGridList ? gridList : "")}
`;

export default Ul;