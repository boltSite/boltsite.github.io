import React from 'react';
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import ProductSubNavPage from './ProductSubNavPage';

const ProductNavPage = () => {

    return (
        <div>
            <Routes>
                <Route exact path="/products01/*" element={<ProductSubNavPage navPath="/products01" />} />
                <Route exact path="/products02/*" element={<ProductSubNavPage navPath="/products02" />} />
                <Route exact path="/products03/*" element={<ProductSubNavPage navPath="/products03"/>} />
                <Route exact path="/products04/*" element={<ProductSubNavPage navPath="/products04" />} />
            </Routes>
        </div>
    )
}

export default ProductNavPage;