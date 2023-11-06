import advantages from '../../mocks/advantages-list';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import { GlobalStyle } from './styles';
import products from './../../mocks/products-list';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../consts';
import MainPage from '../pages/main-page/main-page';
import BuyPage from '../pages/buy-page/buy-page';
import ScrollTop from '../ui/scroll-top/scroll-top';


function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route
            path={AppRoute.MAIN}
            element={<PageWrapper />}
          >
            <Route index element={<MainPage advantages={advantages} />} />
            <Route path={AppRoute.BUY} element={<BuyPage products={products} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
