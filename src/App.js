import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation  } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import TopNavigation from './Components/TopNavigation';
import MiddleNavigation from './Components/MiddleNavigation';
import BottomNavigation from './Components/BottomNavigation';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import CompanyNavPage from './Pages/CompanyNavPage';
import ProductNavPage from './Pages/ProductNavPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    sessionStorage.setItem('redirect', location.pathname + location.search);
  }, [location]);
  
  return (
    <div className="App">
      <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
        <TopNavigation />
        <MiddleNavigation />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/company/*" element={<CompanyNavPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/products/*" element={<ProductNavPage />} />
        </Routes>
        <BottomNavigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
