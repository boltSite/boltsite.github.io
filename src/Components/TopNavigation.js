import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { keyframes } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import logo from '../imgs/longLogo.png';
import menu from '../imgs/menuIcon.png';
import topIcon from '../imgs/topIcon.png';
import bottomIcon from '../imgs/bottomIcon.png';
import MenuItems from './MenuItems';

const slideDown = keyframes`
    from {
        transform: translateY(20%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

const slideUp = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(20%);
    opacity: 0;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutLeft = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const TopNavigation = () => {
  const navigate = useNavigate();
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [phoneClosing, setPhoneClosing] = useState(false);
  const [modal, setModal] = useState(false);
  const [titleModal, setTitleModal] = useState(false);
  const [subTitleModal, setSubTitleModal] = useState(false);
  const menuItems = MenuItems();

  const menuRef = useRef(null);
  const hoverTimeout = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });

  const handleMouseEnter = (buttonName) => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setHoveredButton(buttonName);
    setIsClosing(false);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsClosing(true);
      setTimeout(() => {
        setHoveredButton(null);
        setIsClosing(false);
      }, 150);
    }, 1000);
  };

  const handleModalChange = () => {
    if (modal) {
      setPhoneClosing(true);
      setTimeout(() => {
        setPhoneClosing(false);
        setModal(false);
      }, 300);
    } else {
      setModal(true);
    }
  };

  const handleTitleModalChange = (index) => {
    if (titleModal === index) {
      setTitleModal(null);
    } else {
      setTitleModal(index);
    }
  };

  const subHandleModalChange = (index) => {
    if (subTitleModal === index) {
      setSubTitleModal(null);
    } else {
      setSubTitleModal(index);
    }
  };

  const handleNavigate = (path) => {
    if (modal === true) {
      setModal(!modal);
    }

    if (titleModal === true) {
      setTitleModal(!modal);
    }

    if (subTitleModal === true) {
      setSubTitleModal(!subTitleModal);
    }

    navigate(path);
  };

  const modalContent = {
    company: ['회사 소개서', '회사 전경'],
    products: ['피스, 나사', '볼트, 너트, 와셔, 앙카', '화스너, 와이어, 클램프, 행거', '기타 제품'],
    contact: ['고객지원'],
    about: ['오시는 길'],
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Navbar>
        <Navbar.Brand>
          <NavContaniner>
            <NavDiv>
              <LogoImg onClick={() => handleNavigate("/")}>
                <img alt="logo" src={logo} />
              </LogoImg>
              {isMobile ? (
                <MenuDiv ref={menuRef}>
                  <MenuBtn onClick={handleModalChange}>
                    <img src={menu} alt="menu" />
                  </MenuBtn>
                  {modal && (
                    <MenuModal $phoneClosing={phoneClosing}>
                      {menuItems.map((item, index) => (
                        <MenuItem key={index}>
                          <TitleButton onClick={() => {
                            if (item.modalContent.length > 1) {
                              handleTitleModalChange(index)
                            } else {
                              handleNavigate(`${item.page}`)
                            }
                          }}>
                            {item.title}
                            {item.modalContent.length > 1 && (
                              <Icon src={titleModal === index ? topIcon : bottomIcon} style={{filter: "brightness(0) invert(1)"}} alt="toggle" />
                            )}
                          </TitleButton>

                          {titleModal === index && (
                            <SubMenu>
                              {item.modalContent.map((subItem, subIndex) => (
                                <React.Fragment key={subIndex}>
                                  <SubItem onClick={() => {
                                    if (item.page === "/products") {
                                      subHandleModalChange(subIndex)
                                    } else {
                                      handleNavigate(
                                        `${item.page}${item.page}0${subIndex + 1}`
                                      )
                                    }
                                  }}>
                                    {subItem.title}
                                    {item.title === "제품 소개" && (
                                      <Icon src={subTitleModal === subIndex ? topIcon : bottomIcon} alt="toggle" />
                                    )}
                                  </SubItem>

                                  {subTitleModal === subIndex && (
                                    <SubMenuList>
                                      {Object.values(subItem.items).map((menuItem, menuIndex) => (
                                        <SubMenuItem key={menuIndex}>
                                          <button onClick={() => handleNavigate(`${item.page}${item.page}0${subIndex + 1}/menu0${menuIndex + 1}`)}>{menuItem}</button>
                                        </SubMenuItem>
                                      ))}
                                    </SubMenuList>
                                  )}
                                </React.Fragment>
                              ))}
                            </SubMenu>
                          )}
                        </MenuItem>
                      ))}
                    </MenuModal>
                  )}
                </MenuDiv>
              ) : (
                <ButtonDiv>
                  {Object.keys(modalContent).map((key) => (
                    <ButtonWrapper
                      key={key}
                      onMouseEnter={() => modalContent[key].length > 1 && handleMouseEnter(key)}
                      onMouseLeave={() => modalContent[key].length > 1 && handleMouseLeave()}
                    >
                      <button onClick={() => {
                        if (key === "products") {
                          handleNavigate(`/${key}/${key}01/menu01`);
                        } else {
                          handleNavigate(key === "contact" || key === "about" ? `/${key}` : `/${key}/${key}01`);
                        }
                      }}>
                        <span>{key === "company" ? "회사소개" : key === "products" ? "제품소개" : key === "contact" ? "문의하기" : "사업장 안내"}</span>
                      </button>
                      {hoveredButton === key && modalContent[key].length > 1 && (
                        <Modal $isClosing={isClosing} $itemCount={modalContent[key].length}>
                          {modalContent[key].map((item, index) => (
                            <ModalItem key={index} onClick={() => handleNavigate(`/${key}/${key}0${index + 1}${key === "products" ? '/menu01' : ''}`)}>{item}</ModalItem>
                          ))}
                        </Modal>
                      )}
                    </ButtonWrapper>
                  ))}
                </ButtonDiv>
              )}
            </NavDiv>
          </NavContaniner>
        </Navbar.Brand>
      </Navbar>
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    box-shadow: 1.5px 1.5px 1.5px 1.5px #F3F4F6;
    width: 100%;
    height: 80px;

    @media screen and (max-width: 1000px) {
      height: 60px;
    }
`;

const NavContaniner = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: white;
    box-shadow: 1.5px 1.5px 1.5px 1.5px #F3F4F6;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    @media screen and (max-width: 1000px) {
      height: 60px;
    }
`;

const NavDiv = styled.div`
    width: 50vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LogoImg = styled.button`
    background: none;
    border: none;
    padding: 0;
  
    img {
      width: 190px;
      height: 55px;
    }

    @media screen and (max-width: 1000px) {
        position: absolute;
        width: 145px;
        height: 40px;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        
        img {
          width: 100%;
          height: 100%;
        }
    }
`;

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 29vw;
    justify-content: space-between;
  
    button {
      border: none;
      background: none;
  
      span {
        font-size: 17px;
        color: #3f3f3f;
      }
    }
`;

const ButtonWrapper = styled.div`
    position: relative;
`;

const Modal = styled.div`
    width: 180px;
    height: ${(props) => props.$itemCount * 40}px;
    position: absolute;
    top: 150%;
    right: -3rem;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    border: 1px solid #ddd;
    border-top: 2px solid #34037A;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: ${(props) => (props.$isClosing ? slideUp : slideDown)} 0.2s ease-out;
    z-index: 100;
`;

const ModalItem = styled.button`
    padding: 8px 12px;
    font-size: 13px;
    color: #333;
    cursor: pointer;
    text-align: left;
  
    &:hover {
      color: #34037A;
      text-decoration: underline;
      text-decoration-color: #34037A;
    }
`;

const MenuDiv = styled.div`
    position: fixed;
    top: 12px;
    right: 20px;
    z-index: 10000;
    
`;

const MenuBtn = styled.button`
    background: none;
    border: none;

    img {
      width: 26px;
      height: 26px;
    }
`;

const MenuModal = styled.div`
    position: fixed;
    width: 50vw;
    height: 100%;
    top: 62px;
    right: 0;
    background-color: #484954;
    z-index: 9999;
    animation: ${(props) => (props.$phoneClosing ? slideOutLeft : slideInRight)} 0.3s ease-in-out;
`;

const MenuItem = styled.div`
    border-bottom: 1px solid #ddd;
`;

const TitleButton = styled.button`
    width: 100%;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
    font-size: 15px;
    color: white;
`;

const Icon = styled.img`
    width: 13px;
    height: 13px;
`;

const SubMenu = styled.div`
    background: #f9f9f9;
`;

const SubItem = styled.div`
    padding: 12px;
    font-size: 14px;
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    &:last-child {
        border-bottom: none;
    }
`;

const SubMenuList = styled.div`
    background: #ffffff;
    width: 100%;
`;

const SubMenuItem = styled.button`
    width: 100%;
    padding: 12px;
    display: flex;
    align-items: center;
    background: none;
    border: 1px solid #ddd;
    font-size: 12px;
    cursor: pointer;
    
    button {
      background: none;
      border: none;
    }
`;

export default TopNavigation;