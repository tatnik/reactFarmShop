import SelectedProducts from '../selected-products/selected-products';
import OrderDetails from '../order-details/order-details';
import Form from '../../styled/form/form';
import { FormSection } from './styles';

const Order = ({ products, checkedProducts, onChangeHandler }) => {



  return (
    <Form>
      <FormSection $bottom={26}>
        <SelectedProducts products={products} onChangeHandler={onChangeHandler} />
      </FormSection>
      <FormSection>
        <OrderDetails products={products} checkedProducts={checkedProducts} />
      </FormSection>
    </Form>
  );
}

export default Order;