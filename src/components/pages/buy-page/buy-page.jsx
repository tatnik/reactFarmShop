import React, { useState } from 'react';
import { StyledSection } from './styles';
import Products from '../../blocks/products/products';
import Order from '../../blocks/order/order';

const BuyPage = ({ products }) => {
  const [checkedProducts, setCheckedProducts] = useState([]);

  const [activeProduct, setActiveProduct] = useState(0)

  const handleOnChange = ({ value, checked }) => {
    if (checked) {
      setCheckedProducts((checkedProducts) => [...checkedProducts, +value]);
      setActiveProduct(value);
    }
    else
      setCheckedProducts((checkedProducts) => checkedProducts.filter((el) => el !== +value));
    ;
  }

  return (
    <StyledSection>
      <Order products={products} checkedProducts={checkedProducts} onChangeHandler={handleOnChange} />
      <Products products={products} activeProduct={activeProduct} />
    </StyledSection>
  );
}

export default BuyPage;	