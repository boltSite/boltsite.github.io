import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { motion, AnimatePresence } from 'framer-motion';
import homeIcon from '../imgs/homeIcon.png';
import topIcon from '../imgs/topIcon.png';
import bottomIcon from '../imgs/bottomIcon.png';
import MenuItems from './MenuItems';

const MiddleNavigation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isMainPage = location.pathname === '/';
    const pathSegments = location.pathname.split('/');
    const [iconImg, setIconImg] = useState(bottomIcon);
    const [subIconImg, setSubIconImg] = useState(bottomIcon);
    const [modal, setModal] = useState(false);
    const [subModal, setSubModal] = useState(false);
    const currentMenu = pathSegments.length > 2 ? pathSegments[pathSegments.length - 1] : 'menu01';
    const [selectedSubMenu, setSelectedSubMenu] = useState(currentMenu);
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
    const menuItems = MenuItems();

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

    if (currentItem) {
        const subPath = location.pathname.replace(currentItem.page, '').slice(1).split('/')[0];
        const index = parseInt(subPath.replace(/\D/g, ''), 10) - 1;
        if (currentItem.modalContent[index]) {
            currentSubtitle = currentItem.modalContent[index];
        }
    }

    useEffect(() => {
        if (modal) {
            setModal(false);
            setIconImg(bottomIcon);
        }
        if (!isMainPage) {
            setSelectedSubMenu(currentMenu);
        }
    }, [location.pathname]);

    if (!currentItem) {
        return null;
    }

    const handleNavigate = (path) => {
        if (modal) {
            setModal(false);
            setIconImg(bottomIcon);
        }

        if (subModal) {
            setSubModal(false);
            setSubIconImg(bottomIcon);
        }

        navigate(path);
    };

    return (
        <Container>
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
                                {!isMobile && (
                                    <TextContainer>
                                        {currentItem && (
                                            <MiddleContainer>
                                                <IconDiv>
                                                    <img src={homeIcon} />
                                                </IconDiv>
                                                <Title>{item.title}</Title>
                                                <Subtitle
                                                    onClick={currentItem.modalContent.length > 1 ? handleModalChange : undefined}
                                                    style={{
                                                        cursor: currentItem.modalContent.length === 1 ? "default" : "pointer",
                                                        filter: currentItem.modalContent.length === 1 ? "opacity(0.5) drop-shadow(0 0 0 #7B7B7B)" : "none"
                                                    }}>
                                                    <span>
                                                        {currentItem.modalContent.length > 1 ? currentSubtitle.title : currentSubtitle}
                                                    </span>
                                                    <img
                                                        src={iconImg}
                                                        alt="icon"
                                                    />
                                                    <AnimatePresence>
                                                        {modal && (
                                                            <MotionContainer
                                                                initial={{ height: 0 }}
                                                                animate={{ height: currentItem.modalContent.length * 40 }}
                                                                exit={{ height: 0 }}
                                                            >
                                                                <ModalContent>
                                                                    {currentItem.modalContent.map((content, index) => (
                                                                        <button
                                                                            key={index}
                                                                            onClick={() => {
                                                                                if (currentItem.page === "/products") {
                                                                                    handleNavigate(
                                                                                        `${currentItem.page}${currentItem.page}0${index + 1}/menu01`
                                                                                    )
                                                                                } else {
                                                                                    handleNavigate(
                                                                                        `${currentItem.page}${currentItem.page}0${index + 1}`
                                                                                    )
                                                                                }
                                                                            }}
                                                                        >
                                                                            {content.title}
                                                                        </button>
                                                                    ))}
                                                                </ModalContent>
                                                            </MotionContainer>
                                                        )}
                                                    </AnimatePresence>
                                                </Subtitle>
                                                {currentItem.page === '/products' && (
                                                    <Subheading onClick={subHandleModalChange}
                                                        style={{ cursor: 'pointer' }}>
                                                        <span>
                                                            {currentSubtitle.items[selectedSubMenu]}
                                                        </span>
                                                        <img
                                                            src={subIconImg}
                                                            alt="icon"
                                                        />
                                                        <AnimatePresence>
                                                            {subModal && (
                                                                <MotionContainer
                                                                    initial={{ height: 0 }}
                                                                    animate={{ height: Object.keys(currentSubtitle.items).length * 40 }}
                                                                    exit={{ height: 0 }}
                                                                >
                                                                    <ModalContent>
                                                                        {Object.entries(currentSubtitle.items).map((item, itemIndex) => (
                                                                            <button
                                                                                key={itemIndex}
                                                                                onClick={() => {
                                                                                    setSelectedSubMenu(item[0]);
                                                                                    handleNavigate(`${location.pathname.split('/')[1]}/${location.pathname.split('/')[2]}/${item[0]}`)
                                                                                }}
                                                                            >
                                                                                {item[1]}
                                                                            </button>
                                                                        ))}
                                                                    </ModalContent>
                                                                </MotionContainer>
                                                            )}
                                                        </AnimatePresence>
                                                    </Subheading>
                                                )}
                                            </MiddleContainer>
                                        )}
                                    </TextContainer>
                                )}
                            </MenuItem>
                        ))}
                </PageNav>
            )}
        </Container>
    );
};

const Container = styled.div`
    
`;

const MotionContainer = styled(motion.div)`
    position: absolute;
    width: 111%;
    top: 100%;
    right: 0;
    background-color: #ffffff;
    overflow: hidden;
    border-bottom: 1px solid #cecece;
`;

const PageNav = styled.div`
    width: 100%;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f8f9fa;

    @media screen and (max-width: 1000px) {
      height: 230px;
    }
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

    @media screen and (max-width: 700px) {
      font-size: 30px;
    }
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
            font-size: 13.6px;
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