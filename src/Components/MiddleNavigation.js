import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { Motion, spring } from 'react-motion';
import main1 from '../imgs/main1.jpg';
import main2 from '../imgs/main2.jpg';
import main3 from '../imgs/main3.jpg';
import main4 from '../imgs/main4.jpg';
import homeIcon from '../imgs/homeIcon.png';
import topIcon from '../imgs/topIcon.png';
import bottomIcon from '../imgs/bottomIcon.png';

const menuItems = [
    {
        title: '회사 소개',
        subtitle: '회사소개서',
        img: main1,
        page: '/company',
        modalContent: [
            { title: '회사 소개서', items: [] },
            { title: '회사 전경', items: [] },
        ],
    },
    {
        title: '제품 소개',
        subtitle: '피스, 나사',
        img: main2,
        page: '/products',
        modalContent: [
            {
                title: '피스, 나사',
                items: {
                    menu01: '리벳',
                    menu02: '직결 피스',
                    menu03: '태핑 나사',
                    menu04: '가구용 피스'
                },
            },
            {
                title: '볼트, 너트, 와셔, 앙카',
                items: {
                    menu01: '육각머리볼트, 건축용볼트',
                    menu02: '볼트',
                    menu03: '렌치볼트',
                    menu04: '십자머리 볼트',
                    menu05: '와셔',
                    menu06: '앙카',
                    menu07: '너트(1)',
                    menu08: '너트(2)',
                    menu09: '주문제작'
                },
            },
            {
                title: '화스너, 와이어, 클램프, 행거',
                items: {
                    menu01: '화스너,베이스판, 빳지, 꺽쇠',
                    menu02: '행거, 빔클램프',
                    menu03: '브라켓, 새들',
                    menu04: '틴버클, 체인, 와이어로프, 부속품',
                },
            },
            {
                title: '기타 제품',
                items: {
                    menu01: '기타제품',
                    menu02: '인서트',
                    menu03: '캡'},
            },
        ],
    },
    {
        title: '문의하기',
        subtitle: '고객지원',
        img: main3,
        page: '/contact',
        modalContent: [
            { title: '고객지원', items: [] },
        ],
    },
    {
        title: '사업장 안내',
        subtitle: '오시는 길',
        img: main4,
        page: '/about',
        modalContent: [
            { title: '오시는 길', items: [] },
        ],
    },
];

const MiddleNavigation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isMainPage = location.pathname === '/';
    const [iconImg, setIconImg] = useState(bottomIcon);
    const [subIconImg, setSubIconImg] = useState(bottomIcon);
    const [modal, setModal] = useState(false); // 이미지 상태 초기값
    const [subModal, setSubModal] = useState(false); // 부제목 이미 상태 초기값

    const handleModalChange = () => {
        setModal(!modal);
        setIconImg(!modal ? topIcon : bottomIcon);
        if (subModal) {
            setSubModal(false);
            setSubIconImg(bottomIcon);
        }
    };
    
    const subHandleModalChange = () => {
        setSubModal(!subModal);
        setSubIconImg(!subModal ? topIcon : bottomIcon);
        if (modal) {
            setModal(false);
            setIconImg(bottomIcon);
        }
    };

    const currentItem = menuItems.find((item) => location.pathname.startsWith(item.page));
    let currentSubtitle = currentItem?.subtitle;
    console.log(currentSubtitle);

    if (currentItem) {
        const subPath = location.pathname.replace(currentItem.page, '').slice(1); // 경로에서 하위 경로 추출
        const index = parseInt(subPath.replace(/\D/g, ''), 10) - 1; // 숫자 추출 후 0 기반 인덱스로 변환
        if (currentItem.modalContent[index]) {
            currentSubtitle = currentItem.modalContent[index];
        }
    }

    useEffect(() => {
        if (currentItem) {
            setModal(false); // 기본값으로 초기화
            setIconImg(bottomIcon); // 아이콘 이미지도 초기화
        }
    }, [location.pathname, currentItem]);
    
    if (!currentItem) {
        return null; // 또는 기본 UI를 반환
    }

    const handleNavigate = (path) => {
        if(modal === true) {
            setModal(!modal);
            setIconImg(modal ? topIcon : bottomIcon);
        }

        if(subModal === true) {
            setSubModal(!subModal);
            setSubIconImg(subModal ? topIcon : bottomIcon);
        }

        navigate(path);
    };

    return (
        <div>
            {!isMainPage && (
                <PageNav>
                    {menuItems
                        .filter((item) => location.pathname.startsWith(item.page))
                        .map((item, index) => (
                            <MenuItem key={index}>
                                <ImageContainer>
                                    <img src={item.img} alt={item.title} />
                                </ImageContainer>
                                <TitleContainer>{item.title}</TitleContainer>
                                <TextContainer>
                                {currentItem && (
                                    <MiddleContainer>
                                        <IconDiv>
                                            <img src={homeIcon} />
                                        </IconDiv>
                                        <Title>{item.title}</Title>
                                        <Subtitle>
                                            <span onClick={currentItem.modalContent.length > 1 ? handleModalChange : undefined}>
                                                {currentItem.modalContent.length > 1 ? currentSubtitle.title : currentSubtitle}
                                            </span>
                                            <img
                                                src={iconImg}
                                                alt="icon"
                                                onClick={currentItem.modalContent.length > 1 ? handleModalChange : undefined}
                                                style={{ 
                                                    cursor: currentItem.modalContent.length === 1 ? "default" : "pointer",
                                                    filter: currentItem.modalContent.length === 1 ? "opacity(0.5) drop-shadow(0 0 0 #7B7B7B)" : "none"
                                                }}
                                                disabled={currentItem.modalContent.length === 1}
                                            />
                                                <Motion style={{ height: spring(modal ? currentItem.modalContent.length * 40 : 0) }}>
                                                    {({ height }) => (
                                                        <Modal style={{ height }}>
                                                            <ModalContent>
                                                                {currentItem.modalContent.map((content, index) => (
                                                                    <button
                                                                    key={index}
                                                                    onClick={() =>
                                                                        handleNavigate(
                                                                            `${currentItem.page}${currentItem.page}0${index + 1}`
                                                                        )
                                                                    }
                                                                    >{content.title}</button>
                                                                ))}
                                                            </ModalContent>
                                                        </Modal>
                                                    )}
                                                </Motion>
                                        </Subtitle>
                                        {currentItem.page === '/products' && (
                                        <Subheading>
                                                    <span onClick={subHandleModalChange}>
                                                        {currentSubtitle.items.menu01}
                                                    </span>
                                                    <img
                                                        src={subIconImg}
                                                        alt="icon"
                                                        onClick={subHandleModalChange}
                                                        style={{ cursor: 'pointer' }}
                                                    />
                                                    <Motion
                                                        style={{
                                                            height: spring(subModal ? Object.keys(currentSubtitle.items).length * 40 : 0)
                                                        }}
                                                    >
                                                        {({ height }) => (
                                                            <SubModal style={{ height }}>
                                                                <ModalContent>
                                                                {Object.entries(currentSubtitle.items).map((item, itemIndex) => (
                                                                    <button
                                                                        key={itemIndex}
                                                                        onClick={() => `${location.pathname}${item[0]}`}
                                                                    >
                                                                        {item[1]}
                                                                    </button>
                                                                ))}
                                                                </ModalContent>
                                                            </SubModal>
                                                        )}
                                                    </Motion>
                                        </Subheading>
                                    )}
                                    </MiddleContainer>
                                    )}
                                </TextContainer>
                            </MenuItem>
                        ))}
                </PageNav>
            )}
        </div>
    );
};

const PageNav = styled.div`
    width: 100%;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f8f9fa;
`;

const MenuItem = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 230px;
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.18);
    }
`;

const TitleContainer = styled.span`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    font-size: 35px;
    font-weight: bold;
`;

const TextContainer = styled.div`
    width: 100%;
    height: 50px;
    text-align: center;
    background-color: #F0F0F0;
`;

const MiddleContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    border-top: 1px solid #cecece;
    border-bottom: 1px solid #cecece;
`;

const IconDiv = styled.div`
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #cecece;
    border-right: 1px solid #cecece;

    img {
        width: 20px;
        height: 20px;
        filter: opacity(0.5) drop-shadow(0 0 0 #7B7B7B);
    }
`;

const Title = styled.div`
    width: 150px;
    height: 100%;
    border-right: 1px solid #cecece;
    font-size: 14px;
    display: flex;
    justify-content: left;
    align-items: center;
    margin-left: 1rem;
    color: #7B7B7B;
`;

const Subtitle = styled.div`
    position: relative;
    width: 150px;
    height: 100%;
    border-right: 1px solid #cecece;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 1rem;

    span {
        font-size: 14px;
        color: #7B7B7B;
    }

    img {
        width: 15px;
        height: 15px;
        margin-right: 0.8rem;
    }
`;

const Subheading = styled.div`
    position: relative;
    width: 150px;
    height: 100%;
    border-right: 1px solid #cecece;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 1rem;

    span {
        font-size: 14px;
        color: #7B7B7B;
    }

    img {
        width: 15px;
        height: 15px;
        margin-right: 0.8rem;
    }
`;

const Modal = styled.div`
    position: absolute;
    width: 111%;
    top: 100%;
    right: 0;
    background-color: #ffffff;
    overflow: hidden;
    border-bottom: 1px solid #cecece;
`;

const SubModal = styled.div`
    position: absolute;
    width: 111%;
    top: 100%;
    right: 0;
    background-color: #ffffff;
    overflow: hidden;
`;

const ModalContent = styled.div`
    text-align: center;

    button {
        width: 100%;
        height: 40px;
        font-size: 14px;
        background-color: white;
        color: #7B7B7B;
        border: 1px solid #cecece;
        border-bottom: none;
        cursor: pointer;

        &:hover {
            color: #34037A;
            font-weight: 600;
            text-decoration: underline;
            text-decoration-color: #34037A;
        }
    }
`;

const SectionTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin: 10px 0;
`;

export default MiddleNavigation;