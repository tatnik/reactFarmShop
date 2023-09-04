import advantages from '../../mocks/advantages-list';
import PageWrapper from './../layout/page-wrapper/page-wrapper';


function App() {
  return (
    <div className="App">
      <PageWrapper advantages={advantages} />
    </div>
  );
}

export default App;
