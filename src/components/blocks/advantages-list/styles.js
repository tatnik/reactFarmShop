import styled from "styled-components";
import Section from './../../styled/section/section';
import Ul from './../../styled/ul/ul';
import Li from './../../styled/li/li';

export const StyledAdvantages = styled(Section)`
  background-color: transparent;
  flex-direction: column;
  row-gap: 64px;
  align-items: center;
  overflow: hidden;
`;


export const AdvantageList = styled(Ul)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${(props) => props.theme.indent};
  row-gap: ${(props) => props.theme.indent};
`;

export const AdvantageItem = styled(Li)`
  text-align: left;
  overflow: hidden;
`;
