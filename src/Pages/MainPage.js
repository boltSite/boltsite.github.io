import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import main1 from '../imgs/main1.jpg';
import main2 from '../imgs/main2.jpg';
import main3 from '../imgs/main3.jpg';
import productIcon from '../imgs/productIcon.png';
import AboutUsIcon from '../imgs/AboutUsIcon.png';
import CompanyIcon from '../imgs/CompanyIcon.png';
import ContactIcon from '../imgs/ContactIcon.png';
import BlogIcon from '../imgs/BlogIcon.png';

const MainPage = () => {
    const images = [main1, main2, main3]; // 이미지 배열
    const [currentIndex, setCurrentIndex] = useState(0); // 현재 이미지 인덱스 상태
    const menuItems = [
        { title: '사업장 안내', subtitle: 'About Us', color: '#FF6600', img: AboutUsIcon, page: 'about' },
        { title: '회사소개', subtitle: 'Company introduction', color: '#1E3A8A', img: CompanyIcon, page: 'company/company01' },
        { title: '제품소개', subtitle: 'Products', color: '#6B7280', img: productIcon, page: 'products/products01/menu01' },
        { title: '문의하기', subtitle: 'Contact us', color: '#111827', img: ContactIcon, page: 'contact' },
        { title: '블로그', subtitle: 'Blog', color: '#2CB24A', img: BlogIcon, page: 'https://blog.naver.com/dongsanbolt101' },
    ];
    const autoSlideRef = useRef(null); // 타이머 관리용 useRef
    const navigate = useNavigate();
    const intervalTime = 3000; // 1초 간격으로 이미지 변경

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
        resetAutoSlide();
    };

    const menuButton = (item) => {  // 버튼 클릭 시 해당 페이지로 이동
        if (item.startsWith("http")) {
            window.open(item, "_blank"); // 새 탭에서 외부 링크 열기
        } else {
            navigate(`/${item}`); // 내부 라우팅
        }
    }

    // 자동 슬라이드 기능
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, intervalTime);

        // 컴포넌트 언마운트 시 인터벌 정리
        return () => clearInterval(interval);
    }, []);

    // 타이머를 초기화하고 재시작
    const resetAutoSlide = () => {
        clearInterval(autoSlideRef.current); // 기존 타이머 정리
        autoSlideRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, intervalTime);
    };

    return (
        <Container>
            <ImageContainer image={images[currentIndex]}>
                <Overlay>
                    <Title>품질과 신뢰</Title>
                    <Description>
                        품질과 신뢰를 바탕으로 고객만족을 최고의 가치로 여겨<br />
                        고객감동 실현을 위해 최선을 다할 것을 약속드립니다.
                    </Description>
                </Overlay>
                <MenuContainer>
                    {menuItems.map((item, index) => (
                        <MenuItem onClick={() => menuButton(item.page)} key={index}>
                            <Background color={item.color} />
                            <Imgs src={item.img} alt={item.title} />
                            <TitleContainer>
                                <ButTitle>{item.title}</ButTitle>
                                <Subtitle>{item.subtitle}</Subtitle>
                            </TitleContainer>
                        </MenuItem>
                    ))}
                </MenuContainer>
            </ImageContainer>
            <IndicatorContainer>
                {images.map((_, index) => (
                    <Indicator
                        key={index}
                        $isActive={index === currentIndex}
                        onClick={() => handleIndicatorClick(index)}
                    />
                ))}
            </IndicatorContainer>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 700px;
    overflow: hidden;
    
    @media screen and (max-width: 1000px) {
        height: 590px;
    }
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    transition: background-image 0.5s ease-in-out;
`;

const Overlay = styled.div`
    position: absolute;
    top: 15%;
    left: 10%;
    text-align: center;
    color: white;
    text-align: left;

    @media screen and (max-width: 1000px) {
        top: 10%;
        left: 10%;
        right: 10%;
        text-align: center;
    }
`;

const Title = styled.h1`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;

    @media screen and (max-width: 1000px) {
        font-size: 25px;
    }
`;

const Description = styled.p`
    font-size: 16px;

    @media screen and (max-width: 1000px) {
        font-size: 12.5px;
    }
`;

const MenuContainer = styled.div`
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 300px;
        font-size: 16px;
        flex-direction: column;
        gap: 0px;
        bottom: 0;
    }
`;

const MenuItem = styled.div`
    position: relative;
    width: 180px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 50%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    cursor: pointer;

    @media screen and (max-width: 1000px) {
        width: 100%;
        height: 150px;
        font-size: 16px;
        border-radius: 0%;
        flex-direction: row;
        justify-content: flex-start;
    }
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.color};
    opacity: 0.7;
    transition: opacity 0.3s ease;

    ${MenuItem}:hover & {
        opacity: 1;
    }
`;

const Imgs = styled.img`
    width: 50px;
    height: 50px;
    filter: brightness(0) invert(1);
    margin-bottom: 10px;
    z-index: 1;
    object-fit: contain;

    @media screen and (max-width: 1000px) {
        width: 40px;
        height: 40px;
        border-radius: 0%;
        margin-left: 2rem;
        margin-bottom: 0px;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        margin-left: 2rem;
    }
`;

const ButTitle = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: white;
    margin-bottom: 5px;
    z-index: 1;

    @media screen and (max-width: 1000px) {
        text-align: left;
        margin-bottom: 0px;
    }
`;

const Subtitle = styled.div`
    font-size: 14px;
    color: white;
    z-index: 1;

    @media screen and (max-width: 1000px) {
        text-align: left;
        font-size: 12px;
    }
`;

const IndicatorContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;

    @media screen and (max-width: 1000px) {
        bottom: 20rem;
    }
`;

const Indicator = styled.div`
    width: ${(props) => (props.$isActive ? '20px' : '10px')};
    height: 10px;
    border-radius: ${(props) => (props.$isActive ? '10px' : '50%')};
    background-color: ${(props) => (props.$isActive ? '#ff6600' : 'white')};
    transition: all 0.3s;
    cursor: pointer;
`;

export default MainPage;