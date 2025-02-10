import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import closeIcon from '../imgs/closeIcon.png';

const ContactPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        message: '',
        contact: '',
        email: '',
        files: [],
    });
    const server_url = process.env.REACT_APP_EMAIL_SERVER_URL;
    const navigate = useNavigate();

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file') {
            setFormData((prev) => ({ ...prev, files: Array.from(files) }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();

        // 텍스트 데이터 추가
        formDataToSend.append('title', formData.title);
        formDataToSend.append('message', formData.message);
        formDataToSend.append('contact', formData.contact);
        formDataToSend.append('email', formData.email);

        // 파일 추가
        if (formData.files.length > 0) {
            formData.files.forEach((file) => {
                formDataToSend.append('files', file);
            });
        }

        alert('문의가 정상적으로 접수되었습니다!');
        navigate("/");

        axios.post(`${server_url}/send-email`, formDataToSend, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).catch(() => {
            alert('이메일 전송 중 오류가 발생했습니다.');
        });
    };

    const handleCancel = () => {
        navigate("/");
    };

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden"; // 모달이 열리면 스크롤 방지
        } else {
            document.body.style.overflow = "auto"; // 모달이 닫히면 다시 스크롤 허용
        }

        return () => {
            document.body.style.overflow = "auto"; // 컴포넌트 언마운트 시 원상 복구
        };
    }, [showModal]);

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Title>문의하기</Title>
            <Divider />
            <MiddleContainer>
                <Instructions>
                    · 기성품 및 특수 제작품 등 필요하신 제품 문의 남겨주세요. <br />
                    · 업체 거래, 도·소매, 소량 구매 가능합니다. <br />
                    · 전국 배달 및 택배 배송
                </Instructions>
                <FormGroup>
                    <Label>제목<span>Title</span></Label>
                    <Input type="text" name="title" value={formData.title} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label>내용<span>Description</span></Label>
                    <TextArea name="message" value={formData.message} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label>연락처<span>Phone</span></Label>
                    <SmallInput type="tel" name="contact" value={formData.contact} placeholder="예: 010-1234-5678" onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label>이메일<span>Email</span></Label>
                    <SmallInput type="email" name="email" value={formData.email} placeholder="예: ex@naver.com" onChange={handleChange} required />
                </FormGroup>
                <FormGroup style={{ borderBottom: '1px solid #e9e9e9', paddingBottom: '1rem' }}>
                    <Label>파일첨부<span>File upload</span></Label>
                    <FileGroup>
                        <Input type="file" name="file" onChange={handleChange} style={{ border: 'none', width: '400px' }} multiple />
                        <span>첨부 파일은 총 25MB 이하이며, Excel, MS Word, HWP, PDF, PNG, GIF, JPG 형식만 등록할 수 있습니다.</span>
                    </FileGroup>
                </FormGroup>
                <Agreement>
                    <Checkbox type="checkbox" id="agreement" required />
                    <label htmlFor="agreement">
                        개인정보 수집 및 이용에 동의합니다. <span style={{ color: 'red' }}>*</span>
                    </label>
                    <ViewDetails type="button" onClick={toggleModal}>내용보기</ViewDetails>
                </Agreement>
                <ButtonGroup>
                    <SubmitButton>등록</SubmitButton>
                    <CancelButton onClick={handleCancel}>취소</CancelButton>
                </ButtonGroup>
            </MiddleContainer>
            {showModal && (
                <ModalOverlay onWheel={(e) => e.preventDefault()}>
                    <Modal onWheel={(e) => e.stopPropagation()}>
                        <ModalTopContainer>
                            <ModalHeader>개인정보처리방침</ModalHeader>
                            <CloseButton onClick={toggleModal}><img src={closeIcon} /></CloseButton>
                        </ModalTopContainer>
                        <ModalContent>
                            <p>
                                회사명(이하 '회사'라 한다)는 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고,
                                개인정보와 관련한 고충을 신속하고 원할하게 처리 하기 위해 다음과 같이 개인정보
                                처리 방침을 수립하여 공개합니다.
                                <br /><br />
                                <span>제1조 (개인정보의 처리목적)</span>
                                <br />
                                회사는 다음의 목적을 위하여 개인정보를 처리합니다. 수집된 개인정보는 아래 목적 외의
                                용도로 사용되지 않으며, 이용 목적이 변경될 경우 개인정보 보호법 제 18조에 따라
                                별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                                <br /><br />
                                1. 수집 및 이용 목적
                                주문 처리: 고객이 주문한 상품 및 서비스의 원활한 제공을 위해 개인정보를 수집하며, 결제 및 배송 등의 절차를 진행하기 위해 사용됩니다.
                                <br />
                                이메일 문의 및 기타 고객 요청 응대: 고객이 문의한 내용에 대한 답변 제공 및 문제 해결을 위해 개인정보를 활용합니다.
                                <br />
                                결과 회신: 주문, 문의 또는 요청 사항에 대한 진행 상황 및 결과를 고객에게 안내하기 위해 사용됩니다.
                                <br /><br />
                                2. 수집 항목
                                연락처: 고객에게 신속한 문의 응대 및 결과 회신을 제공하기 위해 수집됩니다.
                                <br />
                                이메일: 주문 내역, 요청 사항 처리 과정, 공지사항 전달 등의 목적으로 사용됩니다.
                                <br /><br />
                                3. 보유/이용 기간
                                고객의 요청 사항이 완료된 후에도 일정 기간(3개월) 동안 보관하여, 이후 동일한 요청이 발생할 경우 빠른 대응을 할 수 있도록 합니다.
                                <br />
                                보유 기간이 경과하면 수집된 개인정보는 즉시 파기됩니다. 다만, 관련 법령에 따라 일정 기간 보관이 필요한 경우 해당 법률을 준수하여 보관됩니다.
                                <br /><br />
                            </p>
                        </ModalContent>
                    </Modal>
                </ModalOverlay>
            )}
        </FormContainer>
    );
};

const FormContainer = styled.form`
    padding: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h3`
    font-size: 26px;
    font-weight: 600;

    @media screen and (max-width: 1100px) {
      font-size: 23.5px;
    }

    @media screen and (max-width: 700px) {
      font-size: 21px;
    }
`;

const Divider = styled.div`
    width: 1000px;
    height: 1px;
    margin: 0 auto;
    background-color: #ddd;
    margin-top: 20px;
    margin-bottom: 60px;

    @media screen and (max-width: 1100px) {
      width: 700px;
    }

    @media screen and (max-width: 700px) {
      width: 90%;
    }
`;

const MiddleContainer = styled.div`
    width: 900px;

    @media screen and (max-width: 1100px) {
      width: 500px;
    }

    @media screen and (max-width: 700px) {
      width: 90%;
    }
`;

const Instructions = styled.p`
    font-size: 14px;
    color: #555;
    margin-bottom: 20px;
    text-align: left;
`;

const FormGroup = styled.div`
    width: 880px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    border-top: 1px solid #e9e9e9;
    padding-top: 1rem;
    padding-left: 2 rem;

    @media screen and (max-width: 1100px) {
        width: 500px;
        flex-direction: column;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`;

const Label = styled.label`
    width: 180px;
    display: block;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #333;
    text-align: left;

    span {
        font-size: 12px;
        padding-left: 0.5rem;
        font-weight: 500;
    }
`;

const Input = styled.input`
    width: 700px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;

    @media screen and (max-width: 1100px) {
      width: 500px;
    }

    @media screen and (max-width: 700px) {
      width: 100%;
    }
`;

const SmallInput = styled.input`
    width: 400px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;

    @media screen and (max-width: 1100px) {
      width: 500px;
    }

    @media screen and (max-width: 700px) {
      width: 100%;
    }
`;

const TextArea = styled.textarea`
    width: 700px;
    height: 300px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    min-height: 100px;

    @media screen and (max-width: 1100px) {
      width: 500px;
      height: 300px;
    }

    @media screen and (max-width: 700px) {
      width: 100%;
    }
`;

const FileGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    span {
        font-size: 13px;
        padding-left: 10px;
    }
`;

const Agreement = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    label {
        font-size: 13px;
    }
`;

const Checkbox = styled.input`
    margin-right: 10px;
`;

const ViewDetails = styled.button`
    background: none;
    border: none;
    color: #808080;
    text-decoration: underline;
    cursor: pointer;

    @media screen and (max-width: 700px) {
      font-size: 13px;
    }
`;


const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding-top: 2rem;

    @media screen and (max-width: 1100px) {
      flex-direction: column;
      gap: 20px;
    }
`;

const CancelButton = styled.button`
    width: 320px;
    padding: 10px 20px;
    background: #6a6a6a;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    color: white;

    @media screen and (max-width: 1100px) {
      width: 320px;
    }

    @media screen and (max-width: 700px) {
      width: 250px;
    }
`;

const SubmitButton = styled.button`
    width: 320px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }

    @media screen and (max-width: 1100px) {
      width: 320px;
    }

    @media screen and (max-width: 700px) {
      width: 250px;
    }
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    background: white;
    border-radius: 8px;
    padding: 20px;
    width: 500px;
    height: 700px;
    overflow-y: auto;

    @media screen and (max-width: 700px) {
        width: 400px;
        height: 600px;
    }
`;

const ModalTopContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

const CloseButton = styled.button`
    width: 20px;
    height: 20px;
    color: black;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 30px;
    margin-top: -1.2rem;

    img {
        width: 20px;
        height: 20px;
    }
`;

const ModalHeader = styled.h2`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 40px;
    text-align: left;
`;

const ModalContent = styled.div`
    font-size: 14px;
    line-height: 1.6;
    text-align: left;
    
    p {
        span {
            font-weight: bold;
        }
    }
`;

export default ContactPage;
