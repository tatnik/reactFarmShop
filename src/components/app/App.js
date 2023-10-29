import advantages from '../../mocks/advantages-list';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import { GlobalStyle } from './styles';
import products from './../../mocks/products-list';


function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper advantages={advantages} products={products} />

    </>
  );
}

export default App;
