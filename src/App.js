import { BrowserRouter } from 'react-router-dom';
import NavigationWrapper from './Components/NavigationWrapper';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationWrapper />
      </BrowserRouter>
    </div>
  );
}

export default App;
