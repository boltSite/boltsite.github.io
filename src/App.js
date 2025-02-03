import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import TopNavigation from './Components/TopNavigation';
import MiddleNavigation from './Components/MiddleNavigation';
import BottomNavigation from './Components/BottomNavigation';
import AboutPage from './Pages/AboutPage';
import CompanyPage from './Pages/CompanyPage';
import ContactPage from './Pages/ContactPage';
import CompanyNavPage from './Pages/CompanyNavPage';
import ProductNavPage from './Pages/ProductNavPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNavigation />
        <MiddleNavigation />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/company/*" element={<CompanyNavPage />} />
          <Route exact path="/company01" element={<CompanyPage />} />
          <Route exact path="/company02" element={<CompanyPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/products/*" element={<ProductNavPage />} />
        </Routes>
        <BottomNavigation/>
      </BrowserRouter>
    </div>
  );
}

export default App;
