import React from 'react';
import { Description, PriceNetto, ProductImage, StyledProductCard } from './styles';
import Tabs from '../tabs/tabs';
import Title, { TitleSize } from '../title/title';
import Dl, { Dd, Dt } from '../../styled/dl/dl';

const ProductCard = ({ product }) => {

  const tabs = [
    {
      title: "Описание",
      content: <>
        <Description>  {product.text} </Description>
        <PriceNetto>  {product.price} руб./ {product.netto} г </PriceNetto>
      </>
    },
    {
      title: "Характеристики",
      content:
        <Dl>
          {product.characteristics.map((item) => (
            <p key={item.name}>
              <Dt>{item.name}:</Dt>
              <Dd>{item.value}</Dd>
            </p>
          ))}
        </Dl>
    },
    {
      title: "Свойства",
      content:
        <Dl>
          {product.properties.map((item) => (
            <p key={item.name}>
              <Dt>{item.name}:</Dt>
              <Dd>{item.value}</Dd>
            </p>
          ))}
        </Dl>
    }
  ];


  return (
    <StyledProductCard>
      <ProductImage src={product.image} alt={product.header} width='248px' height='248px' />
      <div>
        <Title level={3} size={TitleSize.SMALLEST} margin='16'>{product.header}</Title>
        <Tabs tabs={tabs} />
      </div>
    </StyledProductCard>
  );
}

export default ProductCard


