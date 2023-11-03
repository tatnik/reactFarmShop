import styled from "styled-components";

export const StyledProductCard = styled.div`
display: grid;
grid-template-columns: 248px 1fr;
column-gap: ${(props) => props.theme.indent};
border: ${(props) => props.theme.boxBorder};
padding: ${(props) => props.theme.indent};
box-sizing:border-box;
height: 288px;
width: 100%;
`

export const Description = styled.div`
  color: ${(props) => props.theme.colorBlackForText};
  padding: 16px 0 18px 0;
`;

export const PriceNetto = styled.span`
display: inline-block;
padding: 4px 8px;
font-weight: 700;
background-color: #D8ECFE;
`

export const ProductImage = styled.img`
  width: 248px;
  height: 248px;
`;

