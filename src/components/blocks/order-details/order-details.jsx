import React, { useEffect, useRef } from 'react';
import Title, { TitleSize } from '../../ui/title/title';
import Button from './../../ui/button/button';
import Input from '../../styled/input/input';
import Label from './../../styled/label/label';
import { Price } from './styles';
import { useState } from 'react';


const OrderDetails = ({ checkedProducts, products }) => {
  const [isAddressEmpty, setIsAddressEmpty] = useState(true);
  const [isSubmitDisable, setIsSubmitDisable] = useState(true);
  const inputRef = useRef(null);

  const handleOnChange = ({ target }) => {
    setIsAddressEmpty(target.value === undefined || target.value.trim() === "");
  }

  const orderTotal = checkedProducts.length ?
    checkedProducts.reduce((accumulator, currentValue) =>
      accumulator + (products.find((el) => el.id === +currentValue))?.price, 0) : 0;


  useEffect(() => {
    setIsSubmitDisable(isAddressEmpty || checkedProducts.length === 0);
  }, [isAddressEmpty, checkedProducts])


  const handleBuy = () => {
    const orderProducts = products.filter((product) => checkedProducts.includes(product.id));

    const listForOrder = orderProducts.length ?
      orderProducts.reduce((acc, val) =>
        acc + `${val.header} - ${val.price} руб.  \r\n`, "") : "";

    alert(`Ваш заказ: \r\n${listForOrder}Итого: ${orderTotal}руб.`);
  };

  return (
    <>
      <Title
        size={TitleSize.SMALLEST}
        level='2'
        margin='16'>
        Сделать заказ
      </Title>
      <Input
        ref={inputRef}
        name="address"
        placeholder="Введите адрес доставки"
        $margin={20}
        onChange={handleOnChange} />
      <Label
        $small
        $margin='6'>
        Цена
      </Label>
      <Price>{orderTotal} руб.</Price>
      <Button
        type="submit"
        disabled={isSubmitDisable}
        onClick={handleBuy} >
        Купить
      </Button >
    </>
  );
}

export default OrderDetails;	