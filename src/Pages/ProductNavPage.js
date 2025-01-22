import React from 'react';
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import ProductPage from './ProductPage';

const ProductNavPage = () => {
    

    return (
        <div>
            <Routes>
                <Route exact path="/product01" element={<ProductPage />} />
                <Route exact path="/product02" element={<ProductPage />} />
                <Route exact path="/product03" element={<ProductPage />} />
                <Route exact path="/product04" element={<ProductPage />} />
            </Routes>
        </div>
    )
}

export default ProductNavPage;