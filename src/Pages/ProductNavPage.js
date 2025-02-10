import React from 'react';
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import ProductSubNavPage from './ProductSubNavPage';

const ProductNavPage = () => {

    return (
        <div>
            <Routes>
                <Route exact path="/products01/*" element={<ProductSubNavPage />} />
                <Route exact path="/products02/*" element={<ProductSubNavPage />} />
                <Route exact path="/products03/*" element={<ProductSubNavPage />} />
                <Route exact path="/products04/*" element={<ProductSubNavPage />} />
            </Routes>
        </div>
    )
}

export default ProductNavPage;