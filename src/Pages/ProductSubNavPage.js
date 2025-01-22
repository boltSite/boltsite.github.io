import React from 'react';
import { Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import ProductPage from './ProductPage';

import product0101Image1 from '../imgs/product01Image1.jpeg';
import product0101Image2 from '../imgs/product01Image2.jpeg';
import product0101Image3 from '../imgs/product01Image3.jpeg';
import product0101Image4 from '../imgs/product01Image4.jpeg';
import product0101Image5 from '../imgs/product01Image5.jpeg';
import product0101Image6 from '../imgs/product01Image6.jpeg';
import product0101Image7 from '../imgs/product01Image7.jpeg';
import product0101Image8 from '../imgs/product01Image8.jpeg';
import product0101Image9 from '../imgs/product01Image9.jpeg';
import product0101Image10 from '../imgs/product01Image10.jpeg';

import product0102Image1 from '../imgs/product02Image1.jpeg';
import product0102Image2 from '../imgs/product02Image2.jpeg';
import product0102Image3 from '../imgs/product02Image3.jpeg';
import product0102Image4 from '../imgs/product02Image4.jpeg';
import product0102Image5 from '../imgs/product02Image5.jpeg';
import product0102Image6 from '../imgs/product02Image6.jpeg';
import product0102Image7 from '../imgs/product02Image7.jpeg';
import product0102Image8 from '../imgs/product02Image8.jpeg';
import product0102Image9 from '../imgs/product02Image9.jpeg';
import product0102Image10 from '../imgs/product02Image10.jpeg';
import product0102Image11 from '../imgs/product02Image11.jpeg';
import product0102Image12 from '../imgs/product02Image12.jpeg';
import product0102Image13 from '../imgs/product02Image13.jpeg';
import product0102Image14 from '../imgs/product02Image14.jpeg';
import product0102Image15 from '../imgs/product02Image15.jpeg';
import product0102Image16 from '../imgs/product02Image16.jpeg';

import product0103Image1 from '../imgs/product03Image1.jpeg';
import product0103Image2 from '../imgs/product03Image2.jpeg';
import product0103Image3 from '../imgs/product03Image3.jpeg';
import product0103Image4 from '../imgs/product03Image4.jpeg';
import product0103Image5 from '../imgs/product03Image5.jpeg';
import product0103Image6 from '../imgs/product03Image6.jpeg';
import product0103Image7 from '../imgs/product03Image7.jpeg';
import product0103Image8 from '../imgs/product03Image8.jpeg';
import product0103Image9 from '../imgs/product03Image9.jpeg';
import product0103Image10 from '../imgs/product03Image10.jpeg';
import product0103Image11 from '../imgs/product03Image11.jpeg';
import product0103Image12 from '../imgs/product03Image12.jpeg';
import product0103Image13 from '../imgs/product03Image13.jpeg';
import product0103Image14 from '../imgs/product03Image14.jpeg';
import product0103Image15 from '../imgs/product03Image15.jpeg';

import product0104Image1 from '../imgs/product04Image1.jpeg';
import product0104Image2 from '../imgs/product04Image2.jpeg';
import product0104Image3 from '../imgs/product04Image3.jpeg';
import product0104Image4 from '../imgs/product04Image4.jpeg';
import product0104Image5 from '../imgs/product04Image5.jpeg';
import product0104Image6 from '../imgs/product04Image6.jpeg';
import product0104Image7 from '../imgs/product04Image7.jpeg';
import product0104Image8 from '../imgs/product04Image8.jpeg';
import product0104Image9 from '../imgs/product04Image9.jpeg';
import product0104Image10 from '../imgs/product04Image10.jpeg';

import product0105Image1 from '../imgs/product05Image1.jpeg';
import product0105Image2 from '../imgs/product05Image2.jpeg';
import product0105Image3 from '../imgs/product05Image3.jpeg';
import product0105Image4 from '../imgs/product05Image4.jpeg';
import product0105Image5 from '../imgs/product05Image5.jpeg';
import product0105Image6 from '../imgs/product05Image6.jpeg';
import product0105Image7 from '../imgs/product05Image7.jpeg';
import product0105Image8 from '../imgs/product05Image8.jpeg';
import product0105Image9 from '../imgs/product05Image9.jpeg';
import product0105Image10 from '../imgs/product05Image10.jpeg';
import product0105Image11 from '../imgs/product05Image11.jpeg';
import product0105Image12 from '../imgs/product05Image12.jpeg';
import product0105Image13 from '../imgs/product05Image13.jpeg';
import product0105Image14 from '../imgs/product05Image14.jpeg';
import product0105Image15 from '../imgs/product05Image15.jpeg';

import product0106Image1 from '../imgs/product06Image1.jpeg';
import product0106Image2 from '../imgs/product06Image2.jpeg';
import product0106Image3 from '../imgs/product06Image3.jpeg';
import product0106Image4 from '../imgs/product06Image4.jpeg';
import product0106Image5 from '../imgs/product06Image5.jpeg';
import product0106Image6 from '../imgs/product06Image6.jpeg';
import product0106Image7 from '../imgs/product06Image7.jpeg';
import product0106Image8 from '../imgs/product06Image8.jpeg';
import product0106Image9 from '../imgs/product06Image9.jpeg';
import product0106Image10 from '../imgs/product06Image10.jpeg';
import product0106Image11 from '../imgs/product06Image11.jpeg';
import product0106Image12 from '../imgs/product06Image12.jpeg';

import product0107Image1 from '../imgs/product07Image1.jpeg';
import product0107Image2 from '../imgs/product07Image2.jpeg';
import product0107Image3 from '../imgs/product07Image3.jpeg';
import product0107Image4 from '../imgs/product07Image4.jpeg';
import product0107Image5 from '../imgs/product07Image5.jpeg';
import product0107Image6 from '../imgs/product07Image6.jpeg';
import product0107Image7 from '../imgs/product07Image7.jpeg';
import product0107Image8 from '../imgs/product07Image8.jpeg';
import product0107Image9 from '../imgs/product07Image9.jpeg';
import product0107Image10 from '../imgs/product07Image10.jpeg';
import product0107Image11 from '../imgs/product07Image11.jpeg';
import product0107Image12 from '../imgs/product07Image12.jpeg';
import product0107Image13 from '../imgs/product07Image13.jpeg';
import product0107Image14 from '../imgs/product07Image14.jpeg';
import product0107Image15 from '../imgs/product07Image15.jpeg';
import product0107Image16 from '../imgs/product07Image16.png';
import product0107Image17 from '../imgs/product07Image17.png';
import product0107Image18 from '../imgs/product07Image18.png';

import product0108Image1 from '../imgs/product08Image1.png';
import product0108Image2 from '../imgs/product08Image2.png';
import product0108Image3 from '../imgs/product08Image3.png';

import product0109Image1 from '../imgs/product09Image1.png';
import product0109Image2 from '../imgs/product09Image2.png';
import product0109Image3 from '../imgs/product09Image3.png';
import product0109Image4 from '../imgs/product09Image4.png';
import product0109Image5 from '../imgs/product09Image5.png';
import product0109Image6 from '../imgs/product09Image6.png';
import product0109Image7 from '../imgs/product09Image7.png';
import product0109Image8 from '../imgs/product09Image8.png';
import product0109Image9 from '../imgs/product09Image9.png';
import product0109Image10 from '../imgs/product09Image10.png';
import product0109Image11 from '../imgs/product09Image11.png';
import product0109Image12 from '../imgs/product09Image12.png';
import product0109Image13 from '../imgs/product09Image13.png';
import product0109Image14 from '../imgs/product09Image14.png';
import product0109Image15 from '../imgs/product09Image15.png';
import product0109Image16 from '../imgs/product09Image16.png';
import product0109Image17 from '../imgs/product09Image17.png';
import product0109Image18 from '../imgs/product09Image18.png';
import product0109Image19 from '../imgs/product09Image19.png';
import product0109Image20 from '../imgs/product09Image20.png';

const ProductSubNavPage = () => {
    const location = useLocation();

    // 현재 페이지 데이터 가져오기
    const pageData = getPageData(location.pathname);

    const images0101 = {
        "유볼트(U볼트) - 철·스텐": product0102Image1,
        "절연 유볼트": product0102Image2,
        "전산볼트 - 철·스텐·특강·B7·용융": product0102Image3,
        "절단(단축) 전산볼트": product0102Image4,
        "B7스터드볼트": product0102Image5,
        "B8스터드볼트": product0102Image6,
        "플랜지볼트(후렌지볼트) - 철·스텐": product0102Image7,
        "아이볼트 - 철·스텐": product0102Image8,
        "조절좌(레벨링풋) - 철·스텐·니켈": product0102Image9,
        "근각볼트 - 철·스텐": product0102Image10,
        "경첩볼트 - 철·스텐": product0102Image11,
        "사각경첩볼트": product0102Image12,
        "사각경첩볼트 조립": product0102Image13,
        "지지대볼트 - 황동(신주)·니켈": product0102Image14,
        "EGI 휀스 볼트": product0102Image15,
        "삽날볼트": product0102Image16
    };

    const images0102 = {
        "일반육각볼트": product0101Image1,
        "인치규격 육각볼트-철·고장력·스텐": product0101Image2,
        "스텐육각볼트-304·316·316L": product0101Image3,
        "고장력육각볼트(콜라볼트)": product0101Image4,
        "H/T 볼트 F10T 지오메트": product0101Image5,
        "T/S 볼트 S10T ": product0101Image6,
        "용융육각볼트": product0101Image7,
        "황동(신주)육각볼트": product0101Image8,
        "티타늄육각볼트": product0101Image9,
        "절연볼트": product0101Image10
    };

    const images0103 = {
        "SCM435 유두렌치볼트": product0103Image1,
        "SCM435 무두렌치볼트": product0103Image2,
        "SCM435 접시머리 렌치볼트": product0103Image3,
        "SCM435 둥근머리 렌치볼트": product0103Image4,
        "스텐 유두렌치볼트": product0103Image5,
        "스텐 무두렌치볼트": product0103Image6,
        "스텐 접시머리 렌치볼트": product0103Image7,
        "스텐 둥근머리 렌치볼트": product0103Image8,
        "니켈 유두렌치볼트": product0103Image9,
        "니켈 접시머리 렌치볼트": product0103Image10,
        "니켈 둥근머리 렌치볼트": product0103Image11,
        "티타늄 유두렌치볼트": product0103Image12,
        "렌치샘스볼트 - SCM435·스텐": product0103Image13,
        "둥근머리 별(TORX) 렌치볼트": product0103Image14,
        "스트리퍼 볼트": product0103Image15
    };

    const images0104 = {
        "육각 샘스볼트": product0104Image1,
        "둥근머리 샘스볼트": product0104Image2,
        "스텐 육각 샘스볼트": product0104Image3,
        "스텐 둥근머리 샘스볼트": product0104Image4,
        "철 접시머리 십자볼트 (천연색)": product0104Image5,
        "철 접시머리 십자볼트 (착색)": product0104Image6,
        "철 접시머리 십자볼트 (백색)": product0104Image7,
        "철 접시머리 십자볼트 (니켈)": product0104Image8,
        "스텐 접시머리 십자볼트": product0104Image9,
        "황동(신주) 접시머리 십자볼트": product0104Image10,
    };

    const images0105 = {
        "평와셔 - 철·고장력·스텐·니켈·용융": product0105Image1,
        "지오메트 평와셔": product0105Image2,
        "대와셔": product0105Image3,
        "스프링와셔": product0105Image4,
        "테이퍼와셔(각와셔)": product0105Image5,
        "사각와셔": product0105Image6,
        "PC·PE·PP·PVC 와셔": product0105Image7,
        "PE 절연파이프": product0105Image8,
        "나일론 절연와셔": product0105Image9,
        "에폭시 절연와셔": product0105Image10,
        "외치와셔(바깥이붙이와셔) - 철·스텐": product0105Image11,
        "내치와셔(안쪽이붙이와셔) - 철·스텐": product0105Image12,
        "화이바와셔(종이와셔)": product0105Image13,
        "네크와샤(깔대기와샤)": product0105Image14,
        "티타늄평와셔": product0105Image15,
    }

    const images0106 = {
        "셋트앙카": product0106Image1,
        "스텐셋트앙카": product0106Image2,
        "웨지앙카 - 철·스텐": product0106Image3,
        "웨지앙카 엘리베이터용 - 슬리브·국산": product0106Image4,
        "더블앙카(슬리브앙카)": product0106Image5,
        "L앙카(기초앙카)": product0106Image6,
        "드롭인앙카": product0106Image7,
        "스트롱앙카": product0106Image8,
        "케미칼앙카볼트 - 철·스텐": product0106Image9,
        "콘크리트 스크류 앙카": product0106Image10,
        "창호앙카(프레임앙카)": product0106Image11,
        "주입식케미칼앙카액": product0106Image12,
    }

    const images0107 = {
        "일반육각너트": product0107Image1,
        "육각인치너트": product0107Image2,
        "스텐육각너트": product0107Image3,
        "고장력육각너트(콜라너트)": product0107Image4,
        "니켈육각너트": product0107Image5,
        "황동(신주) 육각너트": product0107Image6,
        "플랜지너트(후렌치너트) - 철·스텐": product0107Image7,
        "나일론너트(풀림방지너트) - 철·스텐": product0107Image8,
        "웰딩너트(용접너트) - 배꼽·배발": product0107Image9,
        "용융너트": product0107Image10,
        "아이너트 - 철·스텐": product0107Image11,
        "윙너트(나비너트) - 철·스텐": product0107Image12,
        "캡너트(CAP너트) - 철·스텐": product0107Image13,
        "사각너트": product0107Image14,
        "가시너트": product0107Image15,
        "S45C 커플링너트": product0107Image16,
        "코니칼너트(와셔일체형너트)": product0107Image17,
        "티타늄너트": product0107Image18,
    }

    const images0108 = {
        "팝너트(리벳너트) 원형": product0108Image1,
        "팝너트(리벳너트) 육각": product0108Image2,
        "팝너트(리벳너트) 방수타입": product0108Image3,
    }

    const images0109 = {
        "대형 육각볼트 호칭경": product0109Image1,
        "스텐절연볼트 M45*4.5P*220L": product0109Image2,
        "분할핀홀 유볼트 22*40R*210H": product0109Image3,
        "ㄷ자 유볼트": product0109Image4,
        "유볼트 M24*1000A": product0109Image5,
        "J앙카 로링경": product0109Image6,
        "용융L앙카 단스끼": product0109Image7,
        "양산볼트 단스끼 백도금": product0109Image8,
        "각산볼트·각산너트 주문제작": product0109Image9,
        "스텐전산볼트 주문제작": product0109Image10,
        "전산볼트 전착도장": product0109Image11,
        "써포트 베이스판 주문제작": product0109Image12,
        "용융도금 셋트앙카 (大와셔)": product0109Image13,
        "일반육각볼트 3가백색 아연 도금": product0109Image14,
        "고장력육각볼트(10.9)지오메트 도금": product0109Image15,
        "고장력육각볼트(10.9)백색아연 도금": product0109Image16,
        "플랜지너트(후렌지너트) 3가천연 도금": product0109Image17,
        "플랜지볼트(후렌지볼트) 흑착색 도금": product0109Image18,
        "유너트 매그니 코팅": product0109Image19,
        "유두렌지볼트 나이록코팅": product0109Image20,
    }

    const pages = [
        { path: "/menu01", title: "육각머리볼트·건축용볼트", images: images0101 },
        { path: "/menu02", title: "볼트", images: images0102 },
        { path: "/menu03", title: "렌치볼트", images: images0103 },
        { path: "/menu04", title: "십자머리 볼트", images: images0104 },
        { path: "/menu05", title: "와셔", images: images0105 },
        { path: "/menu06", title: "앙카", images: images0106 },
        { path: "/menu07", title: "너트(1)", images: images0107 },
        { path: "/menu08", title: "너트(2)", images: images0108 },
        { path: "/menu09", title: "주문제작", images: images0109 },
    ];

    return (
        <div>
            {pages.map((page) => (
                <Route
                    key={page.path}
                    path={page.path}
                    element={<ProductPage title={page.title} images={page.images} />}
                />
            ))}
        </div>
    )
}

export default ProductSubNavPage;