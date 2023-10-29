import styled from "styled-components";


export const FormSection = styled.div`
background-color:${(props) => props.theme.colorWhite};
border: ${(props) => props.theme.boxBorder};  
box-shadow: ${(props) => props.theme.boxShadow};
padding-left:${(props) => props.theme.indent};
padding-right:${(props) => props.theme.indent};
padding-top: 24px;
padding-bottom: ${(props) => `${props.$bottom || 20}px`};
`