import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { keyframes } from 'styled-components';
import logo from '../imgs/longLogo.png';

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

const TopNavigation = () => {
    const navigate = useNavigate();
    const [hoveredButton, setHoveredButton] = useState(null);
    const [isClosing, setIsClosing] = useState(false);
    const hoverTimeout = useRef(null);

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
    
    const handleNavigate = (path) => {
        navigate(path);
    };
    
    const modalContent = {
        company: ['회사 소개서', '회사 전경'],
        products:  ['피스, 나사', '볼트, 너트, 와셔, 앙카', '화스너, 와이어, 클램프, 행거', '기타 제품'],
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

    return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            boxShadow: "1.5px 1.5px 1.5px 1.5px #F3F4F6",
            width: "100%",
            height: "80px",
          }}
        >
          <Navbar>
            <Navbar.Brand>
              <NavDiv>
                <LogoImg onClick={() => handleNavigate("/")}>
                  <img alt="logo" src={logo} />
                </LogoImg>
                <ButtonDiv>
                    {Object.keys(modalContent).map((key) => (
                        <ButtonWrapper
                            key={key}
                            onMouseEnter={() => modalContent[key].length > 1 && handleMouseEnter(key)}
                            onMouseLeave={() => modalContent[key].length > 1 && handleMouseLeave()}
                        >
                        <button onClick={() => {if (key === "products") {
                              handleNavigate(`/${key}/${key}01/menu01`);
                          } else {
                              handleNavigate(key === "contact" || key === "about" ? `/${key}` : `/${key}/${key}01`);
                          }}}>
                            <span>{key === "company" ? "회사소개" : key === "products" ? "제품소개" : key === "contact" ? "문의하기" : "사업장 안내"}</span>
                        </button>
                        {hoveredButton === key && modalContent[key].length > 1 &&  (
                            <Modal $isClosing={isClosing} $itemCount={modalContent[key].length}>
                            {modalContent[key].map((item, index) => (
                                <ModalItem key={index} onClick={() => handleNavigate(`/${key}/${key}0${index + 1}${key === "products" ? '/menu01' : ''}`)}>{item}</ModalItem>
                            ))}
                            </Modal>
                        )}
                        </ButtonWrapper>
                    ))}
                    </ButtonDiv>
              </NavDiv>
            </Navbar.Brand>
          </Navbar>
        </div>
      );
    };

    const NavDiv = styled.div`
    width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;
  
  const LogoImg = styled.button`
    background: none;
    border: none;
  
    img {
      width: 180px;
      height: 60px;
    }
  `;
  
  const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 25vw;
    justify-content: space-between;
  
    button {
      border: none;
      background: none;
  
      span {
        font-size: 15px;
        color: #3f3f3f;
      }
    }
  `;
  
  const ButtonWrapper = styled.div`
    position: relative;
  `;
  
  const Modal = styled.div`
    width: 180px;
    height: ${(props) => props.$itemCount * 40 }px;
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
    font-size: 12px;
    color: #333;
    cursor: pointer;
    text-align: left;
  
    &:hover {
        color: #34037A;
        text-decoration: underline;
        text-decoration-color: #34037A;
    }
  `;
  
  export default TopNavigation;