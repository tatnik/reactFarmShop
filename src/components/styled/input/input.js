import styled from "styled-components";


const Input = styled.input`
display: inline-block;
padding: 14px;
width: 100%;  
border: ${(props) => props.theme.boxBorder};
background: #F6F6F6;
box-sizing: border-box;
margin-bottom: ${(props) => props.$margin || 0}px;
`;

export default Input;