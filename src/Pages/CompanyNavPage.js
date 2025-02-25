import React from 'react';
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import CompanyPage from './CompanyPage';

import Introduction1 from '../imgs/Introduction/Introduction1.jpg';
import Introduction2 from '../imgs/Introduction/Introduction2.jpg';
import Introduction3 from '../imgs/Introduction/Introduction3.jpg';
import Introduction4 from '../imgs/Introduction/Introduction4.jpg';
import Introduction5 from '../imgs/Introduction/Introduction5.jpg';
import Introduction6 from '../imgs/Introduction/Introduction6.jpg';
import Introduction7 from '../imgs/Introduction/Introduction7.jpg';


import Company1 from '../imgs/Company/Company1.jpg';
import Company2 from '../imgs/Company/Company2.jpeg';
import Company3 from '../imgs/Company/Company3.jpg';
import Company4 from '../imgs/Company/Company4.jpg';
import Company5 from '../imgs/Company/Company5.jpg';
import Company6 from '../imgs/Company/Company6.jpg';
import Company7 from '../imgs/Company/Company7.jpg';
import Company8 from '../imgs/Company/Company8.jpg';
import Company9 from '../imgs/Company/Company9.jpg';
import Company10 from '../imgs/Company/Company10.jpg';
import Company11 from '../imgs/Company/Company11.jpg';
import Company12 from '../imgs/Company/Company12.jpg';
import Company13 from '../imgs/Company/Company13.jpg';
import Company14 from '../imgs/Company/Company14.jpg';
import Company15 from '../imgs/Company/Company15.jpg';
import Company16 from '../imgs/Company/Company16.jpg';
import Company17 from '../imgs/Company/Company17.jpg';
import Company18 from '../imgs/Company/Company18.jpg';
import Company19 from '../imgs/Company/Company19.jpg';
import Company20 from '../imgs/Company/Company20.jpg';
import Company21 from '../imgs/Company/Company21.jpg';
import Company22 from '../imgs/Company/Company22.jpg';
import Company23 from '../imgs/Company/Company23.jpeg';

const CompanyNavPage = () => {
    const images01 = [
        Introduction1,
        Introduction2,
        Introduction3,
        Introduction4,
        Introduction5,
        Introduction6,
        Introduction7
    ];
    const images02 = [
        Company1,
        Company2,
        Company3,
        Company4,
        Company5,
        Company6,
        Company7,
        Company8,
        Company9,
        Company10,
        Company11,
        Company12,
        Company13,
        Company14,
        Company15,
        Company16,
        Company17,
        Company18,
        Company19,
        Company20,
        Company21,
        Company22,
        Company23
    ];

    const pages = [
        { path: "/company01", title: "회사소개서", images: images01 },
        { path: "/company02", title: "회사전경", images: images02 },
    ];

    return (
        <div>
            <Routes>
                {pages.map((page, index) => (
                    <Route
                        key={index}
                        path={page.path}
                        element={<CompanyPage title={page.title} images={page.images} path={page.path}/>}
                    />
                ))}
            </Routes>
        </div>
    )
}

export default CompanyNavPage;