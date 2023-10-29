import styled, { css } from "styled-components";
import tick from "../../../assets/tick.svg";



export const CheckLabel = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &::after {
  height: 24px;
  width: 24px;
  border: ${(props) => props.theme.boxBorder};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${(props) =>
    props.$isChecked
      ? css`
          background-color: ${props.theme.colorForButton};
          color: ${props.theme.colorWhite};
          background-image: url(${tick});
          background-size: 16px 16px;
          background-position: bottom 4px right 4px;
          background-repeat: no-repeat;
          content: "";
        `
      : css`
          background-color: ${props.theme.colorGray};
          color: ${props.theme.colorBlackForText};
          content: " ";
        `}
  }
`;