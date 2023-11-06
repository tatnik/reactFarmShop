import styled from "styled-components";
import { SwiperSlide } from "swiper/react";



export const ProductsWrapper = styled.div`
display:block;
width:100%;
height: calc(100vh - 170px);
overflow:hidden;
padding: 0;
`;


export const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction:row;
  column-gap: ${(props) => props.theme.indent};
  height: 288px;
`;


export const StyleSlideMini = styled.div`
  display: flex;
  flex-direction:column;
  width: 248px;
  height: 248px;
  background-image: url("${(props) => props.src}");
  position: relative;
  background-size: cover;
  cursor: pointer;
`;
