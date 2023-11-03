import { useRef, useEffect } from 'react';
import { Swiper } from "swiper/react";
import { ProductsWrapper, StyledSwiperSlide } from './styles';


import { register } from 'swiper/element/bundle';
import ProductCard from '../../ui/product-card/product-card';

register();

const Products = ({ products, activeProduct }) => {

  const sliderRef = useRef(null);
  useEffect(() => {
    sliderRef.current.swiper.slideTo(activeProduct, 100, false);
  }, [activeProduct])

  //  <StyleSlideMini src={product.image} alt={product.header} />
  return (
    <ProductsWrapper>
      <Swiper
        ref={sliderRef}
        slidesPerView={2}
        direction={'vertical'}
        height={768}
        loop
      >
        {products.map((product) => (
          <StyledSwiperSlide key={product.id}>
            <ProductCard product={product} />
          </StyledSwiperSlide>
        ))}
        ...
      </Swiper>
    </ProductsWrapper>
  )

}

export default Products;