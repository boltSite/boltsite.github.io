import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProductPage from './ProductPage';

import product0101Image1 from '../imgs/Product01/01/Image1.jpg';
import product0101Image2 from '../imgs/Product01/01/Image2.jpg';
import product0101Image3 from '../imgs/Product01/01/Image3.jpg';
import product0101Image4 from '../imgs/Product01/01/Image4.jpg';
import product0101Image5 from '../imgs/Product01/01/Image5.jpg';
import product0101Image6 from '../imgs/Product01/01/Image6.jpg';
import product0101Image7 from '../imgs/Product01/01/Image7.jpg';
import product0101Image8 from '../imgs/Product01/01/Image8.jpg';
import product0101Image9 from '../imgs/Product01/01/Image9.jpg';
import product0101Image10 from '../imgs/Product01/01/Image10.jpg';
import product0101Image11 from '../imgs/Product01/01/Image11.jpeg';
import product0101Image12 from '../imgs/Product01/01/Image12.jpeg';

import product0102Image1 from '../imgs/Product01/02/Image1.png';

import product0103Image1 from '../imgs/Product01/03/Image1.png';
import product0103Image2 from '../imgs/Product01/03/Image2.jpg';

import product0201Image1 from '../imgs/Product02/01/Image1.jpg';
import product0201Image2 from '../imgs/Product02/01/Image2.jpg';
import product0201Image3 from '../imgs/Product02/01/Image3.jpg';
import product0201Image4 from '../imgs/Product02/01/Image4.jpg';
import product0201Image5 from '../imgs/Product02/01/Image5.jpg';
import product0201Image6 from '../imgs/Product02/01/Image6.png';
import product0201Image7 from '../imgs/Product02/01/Image7.jpg';
import product0201Image8 from '../imgs/Product02/01/Image8.jpg';
import product0201Image9 from '../imgs/Product02/01/Image9.jpg';
import product0201Image10 from '../imgs/Product02/01/Image10.jpg';

import product0202Image1 from '../imgs/Product02/02/Image1.jpg';
import product0202Image2 from '../imgs/Product02/02/Image2.jpg';
import product0202Image3 from '../imgs/Product02/02/Image3.jpg';
import product0202Image4 from '../imgs/Product02/02/Image4.jpg';
import product0202Image5 from '../imgs/Product02/02/Image5.jpg';
import product0202Image6 from '../imgs/Product02/02/Image6.jpg';
import product0202Image7 from '../imgs/Product02/02/Image7.png';
import product0202Image8 from '../imgs/Product02/02/Image8.jpg';
import product0202Image9 from '../imgs/Product02/02/Image9.jpg';
import product0202Image10 from '../imgs/Product02/02/Image10.jpg';
import product0202Image11 from '../imgs/Product02/02/Image11.jpg';
import product0202Image12 from '../imgs/Product02/02/Image12.jpg';
import product0202Image13 from '../imgs/Product02/02/Image13.jpg';
import product0202Image14 from '../imgs/Product02/02/Image14.jpg';
import product0202Image15 from '../imgs/Product02/02/Image15.jpg';
import product0202Image16 from '../imgs/Product02/02/Image16.jpg';
import product0202Image17 from '../imgs/Product02/02/Image17.jpg';
import product0202Image18 from '../imgs/Product02/02/Image18.jpg';
import product0202Image19 from '../imgs/Product02/02/Image19.png';
import product0202Image20 from '../imgs/Product02/02/Image20.jpg';

import product0203Image1 from '../imgs/Product02/03/Image1.jpg';
import product0203Image2 from '../imgs/Product02/03/Image2.jpg';
import product0203Image3 from '../imgs/Product02/03/Image3.jpg';
import product0203Image4 from '../imgs/Product02/03/Image4.jpg';
import product0203Image5 from '../imgs/Product02/03/Image5.jpg';
import product0203Image6 from '../imgs/Product02/03/Image6.jpg';
import product0203Image7 from '../imgs/Product02/03/Image7.jpg';
import product0203Image8 from '../imgs/Product02/03/Image8.jpg';
import product0203Image9 from '../imgs/Product02/03/Image9.jpg';
import product0203Image10 from '../imgs/Product02/03/Image10.png';
import product0203Image11 from '../imgs/Product02/03/Image11.png';
import product0203Image12 from '../imgs/Product02/03/Image12.jpg';
import product0203Image13 from '../imgs/Product02/03/Image13.jpg';
import product0203Image14 from '../imgs/Product02/03/Image14.jpg';
import product0203Image15 from '../imgs/Product02/03/Image15.png';

import product0204Image1 from '../imgs/Product02/04/Image1.jpg';
import product0204Image2 from '../imgs/Product02/04/Image2.jpg';
import product0204Image3 from '../imgs/Product02/04/Image3.jpg';
import product0204Image4 from '../imgs/Product02/04/Image4.jpg';
import product0204Image5 from '../imgs/Product02/04/Image5.jpg';
import product0204Image6 from '../imgs/Product02/04/Image6.jpg';
import product0204Image7 from '../imgs/Product02/04/Image7.jpg';
import product0204Image8 from '../imgs/Product02/04/Image8.jpg';
import product0204Image9 from '../imgs/Product02/04/Image9.jpg';
import product0204Image10 from '../imgs/Product02/04/Image10.jpg';
import product0204Image11 from '../imgs/Product02/04/Image11.jpg';

import product0205Image1 from '../imgs/Product02/05/Image1.jpg';
import product0205Image2 from '../imgs/Product02/05/Image2.jpg';
import product0205Image3 from '../imgs/Product02/05/Image3.jpeg';
import product0205Image4 from '../imgs/Product02/05/Image4.jpeg';
import product0205Image5 from '../imgs/Product02/05/Image5.jpg';
import product0205Image6 from '../imgs/Product02/05/Image6.jpg';
import product0205Image7 from '../imgs/Product02/05/Image7.jpg';
import product0205Image8 from '../imgs/Product02/05/Image8.jpg';
import product0205Image9 from '../imgs/Product02/05/Image9.jpg';
import product0205Image10 from '../imgs/Product02/05/Image10.jpg';
import product0205Image11 from '../imgs/Product02/05/Image11.jpg';
import product0205Image12 from '../imgs/Product02/05/Image12.jpg';
import product0205Image13 from '../imgs/Product02/05/Image13.jpg';
import product0205Image14 from '../imgs/Product02/05/Image14.png';
import product0205Image15 from '../imgs/Product02/05/Image15.jpeg';
import product0205Image16 from '../imgs/Product02/05/Image16.jpg';

import product0206Image1 from '../imgs/Product02/06/Image1.jpg';
import product0206Image2 from '../imgs/Product02/06/Image2.jpg';
import product0206Image3 from '../imgs/Product02/06/Image3.jpg';
import product0206Image4 from '../imgs/Product02/06/Image4.jpg';
import product0206Image5 from '../imgs/Product02/06/Image5.png';
import product0206Image6 from '../imgs/Product02/06/Image6.jpg';
import product0206Image7 from '../imgs/Product02/06/Image7.jpg';
import product0206Image8 from '../imgs/Product02/06/Image8.jpg';
import product0206Image9 from '../imgs/Product02/06/Image9.jpg';
import product0206Image10 from '../imgs/Product02/06/Image10.jpg';
import product0206Image11 from '../imgs/Product02/06/Image11.jpg';
import product0206Image12 from '../imgs/Product02/06/Image12.jpg';

import product0207Image1 from '../imgs/Product02/07/Image1.jpg';
import product0207Image2 from '../imgs/Product02/07/Image2.jpg';
import product0207Image3 from '../imgs/Product02/07/Image3.jpg';
import product0207Image4 from '../imgs/Product02/07/Image4.jpg';
import product0207Image5 from '../imgs/Product02/07/Image5.jpg';
import product0207Image6 from '../imgs/Product02/07/Image6.jpg';
import product0207Image7 from '../imgs/Product02/07/Image7.jpg';
import product0207Image8 from '../imgs/Product02/07/Image8.jpg';
import product0207Image9 from '../imgs/Product02/07/Image9.jpg';
import product0207Image10 from '../imgs/Product02/07/Image10.jpg';
import product0207Image11 from '../imgs/Product02/07/Image11.jpg';
import product0207Image12 from '../imgs/Product02/07/Image12.jpg';
import product0207Image13 from '../imgs/Product02/07/Image13.jpg';
import product0207Image14 from '../imgs/Product02/07/Image14.jpeg';
import product0207Image15 from '../imgs/Product02/07/Image15.jpeg';
import product0207Image16 from '../imgs/Product02/07/Image16.png';
import product0207Image17 from '../imgs/Product02/07/Image17.png';
import product0207Image18 from '../imgs/Product02/07/Image18.jpg';
import product0207Image19 from '../imgs/Product02/07/Image19.png';
import product0207Image20 from '../imgs/Product02/07/Image20.png';
import product0207Image21 from '../imgs/Product02/07/Image21.png';
import product0207Image22 from '../imgs/Product02/07/Image22.png';

import product0208Image1 from '../imgs/Product02/08/Image1.jpg';
import product0208Image2 from '../imgs/Product02/08/Image2.png';
import product0208Image3 from '../imgs/Product02/08/Image3.png';
import product0208Image4 from '../imgs/Product02/08/Image4.png';
import product0208Image5 from '../imgs/Product02/08/Image5.jpg';
import product0208Image6 from '../imgs/Product02/08/Image6.jpg';
import product0208Image7 from '../imgs/Product02/08/Image7.jpg';
import product0208Image8 from '../imgs/Product02/08/Image8.png';
import product0208Image9 from '../imgs/Product02/08/Image9.jpg';
import product0208Image10 from '../imgs/Product02/08/Image10.jpg';
import product0208Image11 from '../imgs/Product02/08/Image11.jpg';
import product0208Image12 from '../imgs/Product02/08/Image12.png';
import product0208Image13 from '../imgs/Product02/08/Image13.jpg';
import product0208Image14 from '../imgs/Product02/08/Image14.jpg';
import product0208Image15 from '../imgs/Product02/08/Image15.jpg';
import product0208Image16 from '../imgs/Product02/08/Image16.jpg';
import product0208Image17 from '../imgs/Product02/08/Image17.jpg';
import product0208Image18 from '../imgs/Product02/08/Image18.png';
import product0208Image19 from '../imgs/Product02/08/Image19.png';
import product0208Image20 from '../imgs/Product02/08/Image20.jpg';
import product0208Image21 from '../imgs/Product02/08/Image21.jpg';
import product0208Image22 from '../imgs/Product02/08/Image22.jpg';

import product0301Image1 from '../imgs/Product03/01/Image1.jpg';
import product0301Image2 from '../imgs/Product03/01/Image2.jpg';
import product0301Image3 from '../imgs/Product03/01/Image3.png';
import product0301Image4 from '../imgs/Product03/01/Image4.jpg';
import product0301Image5 from '../imgs/Product03/01/Image5.jpg';
import product0301Image6 from '../imgs/Product03/01/Image6.png';
import product0301Image7 from '../imgs/Product03/01/Image7.jpg';
import product0301Image8 from '../imgs/Product03/01/Image8.jpg';
import product0301Image9 from '../imgs/Product03/01/Image9.png';
import product0301Image10 from '../imgs/Product03/01/Image10.jpg';

import product0302Image1 from '../imgs/Product03/02/Image1.jpg';
import product0302Image2 from '../imgs/Product03/02/Image2.jpg';
import product0302Image3 from '../imgs/Product03/02/Image3.jpg';
import product0302Image4 from '../imgs/Product03/02/Image4.jpeg';
import product0302Image5 from '../imgs/Product03/02/Image5.png';
import product0302Image6 from '../imgs/Product03/02/Image6.png';
import product0302Image7 from '../imgs/Product03/02/Image7.jpeg';
import product0302Image8 from '../imgs/Product03/02/Image8.jpg';

import product0303Image1 from '../imgs/Product03/03/Image1.jpeg';
import product0303Image2 from '../imgs/Product03/03/Image2.jpeg';
import product0303Image3 from '../imgs/Product03/03/Image3.jpeg';
import product0303Image4 from '../imgs/Product03/03/Image4.jpeg';
import product0303Image5 from '../imgs/Product03/03/Image5.jpg';
import product0303Image6 from '../imgs/Product03/03/Image6.png';
import product0303Image7 from '../imgs/Product03/03/Image7.png';
import product0303Image8 from '../imgs/Product03/03/Image8.png';

import product0304Image1 from '../imgs/Product03/04/Image1.jpg';
import product0304Image2 from '../imgs/Product03/04/Image2.jpg';
import product0304Image3 from '../imgs/Product03/04/Image3.jpg';
import product0304Image4 from '../imgs/Product03/04/Image4.jpg';
import product0304Image5 from '../imgs/Product03/04/Image5.jpg';
import product0304Image6 from '../imgs/Product03/04/Image6.jpg';
import product0304Image7 from '../imgs/Product03/04/Image7.jpg';
import product0304Image8 from '../imgs/Product03/04/Image8.jpg';

import product0401Image1 from '../imgs/Product04/01/Image1.jpg';
import product0401Image2 from '../imgs/Product04/01/Image2.jpg';
import product0401Image3 from '../imgs/Product04/01/Image3.jpg';
import product0401Image4 from '../imgs/Product04/01/Image4.jpg';
import product0401Image5 from '../imgs/Product04/01/Image5.jpg';
import product0401Image6 from '../imgs/Product04/01/Image6.png';
import product0401Image7 from '../imgs/Product04/01/Image7.png';

import product0402Image1 from '../imgs/Product04/02/Image1.png';

import product0403Image1 from '../imgs/Product04/03/Image1.png';
import product0403Image2 from '../imgs/Product04/03/Image2.jpg';

const ProductSubNavPage = ({ navPath }) => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/');

    const productType = pathSegments[2];

    const images0101 = {
        "블라인드 리벳 - 알루미늄·스텐·철": product0101Image1,
        "육각직결피스(육각머리 양날스크류볼트)": product0101Image2,
        "스텐육각직결피스(육각머리 양날스크류)": product0101Image3,
        "육각직결피스 H빔용 매그니": product0101Image4,
        "냄비머리 직결나사(양날피스)": product0101Image5,
        "냄비머리 와샤붙이 직결나사(양날피스)": product0101Image6,
        "접시머리 직결나사(양날피스)": product0101Image7,
        "매거진피스(자동연발피스)-외날·양날": product0101Image8,
        "드라이월 스크류(목재용 나팔머리외날)- 무컷·컷팅": product0101Image9,
        "육각 대와샤 스푼포인트 스크류": product0101Image10,
        "외날피스": product0101Image11,
        "날개붙이": product0101Image12,
    };

    const images0102 = {
        "바인드 2종 - 천연색·3가니켈": product0102Image1,
    };

    const images0103 = {
        "목재용 직결피스": product0103Image1,
        "평머리 2종 (평머리 스크류)": product0103Image2,
    };

    const images0201 = {
        "절연볼트": product0201Image1,
        "일반육각볼트": product0201Image2,
        "인치규격 육각볼트-철·고장력·스텐": product0201Image3,
        "스텐육각볼트-304·316·316L": product0201Image4,
        "고장력육각볼트(콜라볼트)": product0201Image5,
        "H/T 볼트 F10T 지오메트": product0201Image6,
        "T/S 볼트 S10T ": product0201Image7,
        "용융육각볼트": product0201Image8,
        "황동(신주)육각볼트": product0201Image9,
        "티타늄육각볼트": product0201Image10,
    };

    const images0202 = {
        "절연스터드볼트": product0202Image1,
        "절연 유볼트": product0202Image2,
        "유볼트(U볼트) - 철·스텐": product0202Image3,
        "목대형유볼트 셋트": product0202Image4,
        "전산볼트 - 철·스텐·특강·B7·용융": product0202Image5,
        "절단(단축) 전산볼트": product0202Image6,
        "B7스터드볼트": product0202Image7,
        "B8스터드볼트.png": product0202Image8,
        "플랜지볼트(후렌지볼트) - 철·스텐": product0202Image9,
        "나비볼트 - 철·스텐": product0202Image10,
        "아이볼트 - 철·스텐": product0202Image11,
        "조절좌(레벨링풋) - 철·스텐·니켈": product0202Image12,
        "근각볼트 - 철·스텐": product0202Image13,
        "경첩볼트 - 철·스텐": product0202Image14,
        "사각경첩볼트": product0202Image15,
        "사각경첩볼트 조립": product0202Image16,
        "지지대볼트 - 황동(신주)·니켈": product0202Image17,
        "EGI 휀스 볼트": product0202Image18,
        "삽날볼트": product0202Image19,
        "레일클램프 더블볼트(접시볼트)": product0202Image20,
    };

    const images0203 = {
        "SCM435 유두렌치볼트": product0203Image1,
        "SCM435 무두렌치볼트": product0203Image2,
        "SCM435 접시머리 렌치볼트": product0203Image3,
        "SCM435 둥근머리 렌치볼트": product0203Image4,
        "스텐 유두렌치볼트": product0203Image5,
        "스텐 무두렌치볼트": product0203Image6,
        "스텐 접시머리 렌치볼트": product0203Image7,
        "스텐 둥근머리 렌치볼트": product0203Image8,
        "니켈 유두렌치볼트": product0203Image9,
        "니켈 접시머리 렌치볼트": product0203Image10,
        "니켈 둥근머리 렌치볼트": product0203Image11,
        "티타늄 유두렌치볼트": product0203Image12,
        "렌치샘스볼트 - SCM435·스텐": product0203Image13,
        "둥근머리 별(TORX) 렌치볼트": product0203Image14,
        "스트리퍼 볼트": product0203Image15
    };

    const images0204 = {
        "육각 샘스볼트": product0204Image1,
        "둥근머리 샘스볼트": product0204Image2,
        "스텐 육각 샘스볼트": product0204Image3,
        "스텐 둥근머리 샘스볼트": product0204Image4,
        "니켈 둥근머리 샘스볼트": product0204Image5,
        "철 접시머리 십자볼트 (천연색)": product0204Image7,
        "철 접시머리 십자볼트 (착색)": product0204Image7,
        "철 접시머리 십자볼트 (백색)": product0204Image8,
        "스텐 접시머리 십자볼트": product0204Image9,
        "철 접시머리 십자볼트 (니켈)": product0204Image10,
        "황동(신주) 접시머리 십자볼트": product0204Image11
    };

    const images0205 = {
        "평와셔 - 철·고장력·스텐·니켈·용융": product0205Image1,
        "지오메트 평와셔": product0205Image2,
        "대와셔": product0205Image3,
        "스프링와셔": product0205Image4,
        "테이퍼와셔(각와셔)": product0205Image5,
        "사각와셔": product0205Image6,
        "PC·PE·PP·PVC 와셔": product0205Image7,
        "PE 절연파이프": product0205Image8,
        "나일론 절연와셔": product0205Image9,
        "에폭시 절연와셔": product0205Image10,
        "외치와셔(바깥이붙이와셔) - 철·스텐": product0205Image11,
        "내치와셔(안쪽이붙이와셔) - 철·스텐": product0205Image12,
        "화이바와셔(종이와셔)": product0205Image13,
        "네크와샤(깔대기와샤)": product0205Image14,
        "티타늄평와셔": product0205Image15,
        "노드락 와셔": product0205Image16
    }

    const images0206 = {
        "셋트앙카": product0206Image1,
        "스텐셋트앙카 - 201·304": product0206Image2,
        "웨지앙카 - 철·스텐(국산·수입)": product0206Image3,
        "웨지앙카 엘리베이터용 - 슬리브(국산·수입)": product0206Image4,
        "더블앙카(슬리브앙카) - 철·스텐": product0206Image5,
        "L앙카(기초앙카) - L형 LA형 J형 JA형": product0206Image6,
        "드롭인앙카": product0206Image7,
        "스트롱앙카 - 철·스텐": product0206Image8,
        "케미칼앙카볼트 - 철·스텐": product0206Image9,
        "콘크리트 스크류 앙카 - 볼트형·너트형": product0206Image10,
        "단열재앙카- 기본·보강형": product0206Image11,
        "주입식케미칼앙카액": product0206Image12,
    }

    const images0207 = {
        "일반육각너트": product0207Image1,
        "인치육각너트": product0207Image2,
        "스텐육각너트": product0207Image3,
        "고장력육각너트(콜라너트)": product0207Image4,
        "니켈육각너트": product0207Image5,
        "황동(신주) 육각너트": product0207Image6,
        "플랜지너트(후렌치너트) - 철·스텐": product0207Image7,
        "나일론너트(풀림방지너트) - 철·스텐": product0207Image8,
        "웰딩너트(용접너트) - 철·스텐(배꼽·배발)": product0207Image9,
        "용융너트": product0207Image10,
        "아이너트 - 철·스텐": product0207Image11,
        "윙너트(나비너트) - 철·스텐": product0207Image12,
        "캡너트(CAP너트) - 철·스텐": product0207Image13,
        "사각너트": product0207Image14,
        "가시너트": product0207Image15,
        "S45C 커플링너트": product0207Image16,
        "코니칼너트(와셔일체형너트)": product0207Image17,
        "티타늄너트": product0207Image18,
        "유너트- 철·스텐": product0207Image19,
        "팝너트(리벳너트) 원형": product0207Image20,
        "팝너트(리벳너트) 육각": product0207Image21,
        "팝너트(리벳너트) 방수타입": product0207Image22
    }

    const images0208 = {
        "대형 육각볼트 호칭경": product0208Image1,
        "스텐절연볼트 M45x4.5Px220L": product0208Image2,
        "분할핀홀 유볼트 22x40Rx210H": product0208Image3,
        "ㄷ자 유볼트": product0208Image4,
        "유볼트 M24x1000A": product0208Image5,
        "J앙카 로링경": product0208Image6,
        "용융L앙카 단스끼": product0208Image7,
        "양산볼트 단스끼 백도금": product0208Image8,
        "각산볼트·각산너트 주문제작": product0208Image9,
        "스텐전산볼트 주문제작": product0208Image10,
        "전산볼트 전착도장": product0208Image11,
        "써포트 베이스판 주문제작": product0208Image12,
        "용융도금 셋트앙카 (大와셔)": product0208Image13,
        "일반육각볼트 3가백색 아연 도금": product0208Image14,
        "고장력육각볼트(10.9)지오메트 도금": product0208Image15,
        "고장력육각볼트(10.9)백색아연 도금": product0208Image16,
        "플랜지너트(후렌지너트) 3가천연 도금": product0208Image17,
        "플랜지볼트(후렌지볼트) 흑착색 도금": product0208Image18,
        "유너트 매그니 코팅": product0208Image19,
        "유두렌지볼트 나이록코팅": product0208Image20,
        "사이드브러싱(후크볼트)": product0208Image21,
        "접시머리볼트(-홈)-316L": product0208Image22
    }

    const images0301 = {
        "베이스판(앙카 플레이트)": product0301Image1,
        "스텐 베이스판": product0301Image2,
        "아연 베이스판": product0301Image3,
        "사비 베이스판": product0301Image4,
        "피스빳지(샷시용)": product0301Image5,
        "용접빳지": product0301Image6,
        "아연 화스너": product0301Image7,
        "사비 화스너": product0301Image8,
        "스텐 화스너": product0301Image9,
        "꺽쇠": product0301Image10
    };

    const images0302 = {
        "KS 파이프 행거(행가)": product0302Image1,
        "절연 파이프 행거(행가)": product0302Image2,
        "SU(SR)파이프용 특수PVC튜브행거": product0302Image3,
        "천장 경량 행거": product0302Image4,
        "빔클램프 악어이빨": product0302Image5,
        "G 클램프 그네형": product0302Image6,
        "퍼지앙카(퍼즐인서트)": product0302Image7,
        "H빔 브라켓(클램프)": product0302Image8
    };

    const images0303 = {
        "일반브라켓": product0303Image1,
        "C형강브라켓": product0303Image2,
        "양날브라켓": product0303Image3,
        "외날브라켓": product0303Image4,
        "가스브라켓 - 아연·사비": product0303Image5,
        "새들": product0303Image6,
        "반새들": product0303Image7,
        "빔새들(파이라이크새들)": product0303Image8
    };

    const images0304 = {
        "턴버클 - 주물·단조·짜개·스텐": product0304Image1,
        "턴버클 JAW": product0304Image2,
        "와이어로프 - 철·스텐·PVC코팅": product0304Image3,
        "와이어클립 - 주물·단조·스텐": product0304Image4,
        "샤클 - 철·스텐 ": product0304Image5,
        "스냅후크(비너) - 철·스텐": product0304Image6,
        "아이후크(크레인후크)": product0304Image7,
        "체인 - 철·스텐": product0304Image8
    };

    const images0401 = {
        "분할핀(코타핀) - 철·스텐·황동": product0401Image1,
        "스프링핀 - 철·스텐": product0401Image2,
        "R핀(알핀) - 철·스텐": product0401Image3,
        "RPP조이너(양개조이너)": product0401Image4,
        "L렌치핸들 - 백색·착색·니켈": product0401Image5,
        "사각키(사각바) - 철·스텐": product0401Image6,
        "육각 레그스크류(고지스크류)": product0401Image7,
    };

    const images0402 = {
        "스프링데크인서트": product0402Image1
    };

    const images0403 = {
        "볼트캡(앙카캡)": product0403Image1,
        "목볼트캡": product0403Image2
    };

    const pagesMap = {
        products01: [
            { path: "/menu01", title: "리벳 & 직결 피스", images: images0101 },
            { path: "/menu02", title: "태핑 나사", images: images0102 },
            { path: "/menu03", title: "가구용 피스", images: images0103 },
        ],
        products02: [
            { path: "/menu01", title: "육각머리볼트·건축용볼트", images: images0201 },
            { path: "/menu02", title: "볼트", images: images0202 },
            { path: "/menu03", title: "렌치볼트", images: images0203 },
            { path: "/menu04", title: "십자머리 볼트", images: images0204 },
            { path: "/menu05", title: "와셔", images: images0205 },
            { path: "/menu06", title: "앙카", images: images0206 },
            { path: "/menu07", title: "너트", images: images0207 },
            { path: "/menu08", title: "주문제작", images: images0208 },
        ],
        products03: [
            { path: "/menu01", title: "화스너, 베이스판, 빳지, 꺽쇠", images: images0301 },
            { path: "/menu02", title: "행거, 빔클램프", images: images0302 },
            { path: "/menu03", title: "브라켓, 새들", images: images0303 },
            { path: "/menu04", title: "틴버클, 체인, 와이어로프, 부속품", images: images0304 },
        ],
        products04: [
            { path: "/menu01", title: "기타제품", images: images0401 },
            { path: "/menu02", title: "인서트", images: images0402 },
            { path: "/menu03", title: "캡", images: images0403 },
        ],
    };

    // 기본값 설정 (productType이 없거나 매칭되지 않는 경우 대비)
    const selectedPages = pagesMap[productType] || [];

    return (
        <div>
            <Routes>
                {selectedPages.map((page) => (
                    <Route
                        key={page.path}
                        path={page.path}
                        element={<ProductPage title={page.title} images={page.images} navPath={navPath} path={page.path} />}
                    />
                ))}
            </Routes>
        </div>
    )
}

export default ProductSubNavPage;