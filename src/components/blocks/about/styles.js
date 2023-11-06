import styled from "styled-components";
import Section from "../../styled/section/section";
import aboutImage from "../../../assets/about.png"

export const StyledSectionAbout = styled(Section)`
  padding-right: 553px;
  min-height:600px;
  background-color:  ${(props) => props.theme.colorForLightBG};
  align-items: center;
  z-index: 1;

  &:before {
  position: absolute;
  bottom: 50% - 223px;
  right:  ${(props) => props.theme.pagePadding};
  display: block;
  content: "";
  width: 446px;
  height: 446px;
  background-color: #C4E2FF;
  border-radius: 50%;
} 

  &:after {
  position: absolute;
  bottom: 0;
  right: 177px;
  display: block;
  content: "";
  width: 273px;
  height: 543px;
  margin: auto;
  background: url(${aboutImage}) no-repeat;
}
`;


export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  min-width: 650px;
  z-index: 3;
 `;

export const Text = styled.p`
  padding: 0;
  margin-top: 24px;
  padding-right: 99px;
  margin-bottom: 0;
  box-sizing: border-box;
`;

