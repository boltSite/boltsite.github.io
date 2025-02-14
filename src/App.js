import { BrowserRouter } from 'react-router-dom';
import NavigationWrapper from './Components/NavigationWrapper';
import GlobalStyle from './styles/GlobalStyle';

const App = () => {

  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <NavigationWrapper />
      </BrowserRouter>
    </div>
  );
}

export default App;
