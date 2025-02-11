import './App.css';
import { BrowserRouter } from 'react-router-dom';
import NavigationWrapper from './Components/NavigationWrapper';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
        <NavigationWrapper />
      </BrowserRouter>
    </div>
  );
}

export default App;
