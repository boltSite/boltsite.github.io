import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import TopNavigation from '../Components/TopNavigation';
import MiddleNavigation from '../Components/MiddleNavigation';
import BottomNavigation from '../Components/BottomNavigation';
import AboutPage from '../Pages/AboutPage';
import ContactPage from '../Pages/ContactPage';
import CompanyNavPage from '../Pages/CompanyNavPage';
import ProductNavPage from '../Pages/ProductNavPage';

const NavigationWrapper = () => {

    return (
        <div>
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
        </div>
    );
}

export default NavigationWrapper;