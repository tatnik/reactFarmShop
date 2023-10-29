import React from 'react';
import Title, { TitleSize } from '../../ui/title/title';
import Button from './../../ui/button/button';
import Input from '../../styled/input/input';
import Label from './../../styled/label/label';
import { Price } from './styles';


const OrderDetails = ({ checkedProducts, products }) => {

  const orderTotal = checkedProducts.length ?
    checkedProducts.reduce((accumulator, currentValue) =>
      accumulator + (products.find((el) => el.id === +currentValue))?.price, 0) : 0;
  return (
    <>
      <Title size={TitleSize.SMALLEST} level="2">Сделать заказ</Title>
      <Input name="address" placeholder="Введите адрес доставки" $margin={20} />
      <Label $small $margin={6}>
        Цена
      </Label>
      <Price>{orderTotal} руб.</Price>
      <Button type="submit">Купить</Button >
    </>
  );
}

export default OrderDetails;	