import Ul from '../../styled/ul/ul';
import Li from './../../styled/li/li';
import Title, { TitleSize } from './../../ui/title/title';
import { CheckLabel } from './styles';
import { CheckButton } from '../../styled/check-button/check-button';

const SelectedProducts = ({ products, onChangeHandler }) => {

  return (
    <>
      {products?.length ? (
        <>
          <Title size={TitleSize.SMALLEST} level="2">Выберите продукты</Title>
          <Ul>
            {products.map((product) => (
              <Li key={product.id}>
                <CheckButton
                  labelComponent={CheckLabel}
                  text={product.header}
                  value={product.id}
                  name={`product${product.id}`}
                  isChecked={false}
                  onChangeHandler={onChangeHandler}
                />
              </Li>
            ))}
          </Ul>
        </>) : null}
    </>

  )
}

export default SelectedProducts;	