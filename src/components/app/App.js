import advantages from '../../mocks/advantages-list';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import { GlobalStyle } from './styles';


function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper advantages={advantages} />

    </>
  );
}

export default App;
