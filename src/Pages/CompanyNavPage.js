import React from 'react';
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import CompanyPage from './CompanyPage';

import Introduction1 from '../imgs/Introduction1.jpeg';
import Introduction2 from '../imgs/Introduction2.jpeg';
import Introduction3 from '../imgs/Introduction3.jpeg';
import Introduction4 from '../imgs/Introduction4.jpeg';
import Introduction5 from '../imgs/Introduction5.jpeg';
import Introduction6 from '../imgs/Introduction6.jpeg';
import Introduction7 from '../imgs/Introduction7.jpeg';


import Company1 from '../imgs/Company1.jpeg';
import Company2 from '../imgs/Company2.jpeg';
import Company3 from '../imgs/Company3.jpeg';
import Company4 from '../imgs/Company4.jpeg';
import Company5 from '../imgs/Company5.jpeg';
import Company6 from '../imgs/Company6.jpeg';
import Company7 from '../imgs/Company7.jpeg';
import Company8 from '../imgs/Company8.jpeg';
import Company9 from '../imgs/Company9.jpeg';
import Company10 from '../imgs/Company10.jpeg';
import Company11 from '../imgs/Company11.jpeg';
import Company12 from '../imgs/Company12.jpeg';
import Company13 from '../imgs/Company13.jpeg';
import Company14 from '../imgs/Company14.jpeg';
import Company15 from '../imgs/Company15.jpeg';
import Company16 from '../imgs/Company16.jpeg';

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
        Company16
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
                        element={<CompanyPage title={page.title} images={page.images} />}
                    />
                ))}
            </Routes>
        </div>
    )
}

export default CompanyNavPage;