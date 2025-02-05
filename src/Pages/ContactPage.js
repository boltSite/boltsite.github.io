import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const ContactPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        message: '',
        contact: '',
        email: '',
        file: null,
    });

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file') {
            setFormData((prev) => ({ ...prev, file: files[0] }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
        const userId = process.env.REACT_APP_EMAIL_API_KEY;

        const templateParams = {
            title: formData.title,
            message: formData.message,
            contact: formData.contact,
            email: formData.email,
        };

        emailjs
            .send(serviceId, templateId, templateParams, userId)
            .then((response) => {
                alert('문의가 성공적으로 전송되었습니다!');
            })
            .catch((error) => {
                alert('문의 전송 중 오류가 발생했습니다. 다시 시도해주세요.');
                console.error('EmailJS Error:', error);
            });
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Title>문의하기</Title>
            <Divider />
            <div style={{ width: "60%" }}>
            <Instructions>
                · 기성품 및 특수 제작품 등 필요하신 제품 문의 남겨주세요. <br />
                · 업체 거래, 도·소매, 소량 구매 가능합니다. <br />
                · 전국 배달 및 택배 배송
            </Instructions>
            <FormGroup>
                <Label>타이틀</Label>
                <Input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
                <Label>장문 입력</Label>
                <TextArea name="message" value={formData.message} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
                <Label>사진 등록</Label>
                <Input type="file" name="file" onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label>연락처</Label>
                <Input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
                <Label>이메일</Label>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </FormGroup>
            <Agreement>
                    <Checkbox type="checkbox" id="agreement" />
                    <label htmlFor="agreement">
                        개인정보 수집 및 이용에 동의합니다. <span style={{ color: 'red' }}>*</span>
                    </label>
                    <ViewDetails onClick={toggleModal}>내용보기</ViewDetails>
                </Agreement>
            <ButtonGroup>
                    <CancelButton>취소</CancelButton>
                    <SubmitButton>등록</SubmitButton>
            </ButtonGroup>
            </div>
            {showModal && (
                <ModalOverlay>
                    <Modal>
                        <ModalHeader>개인정보 수집 및 이용에 대한 안내</ModalHeader>
                        <ModalContent>
                            <p>
                                1. 수집/이용 목적: 주문, 이메일, 문의 등의 고객 요청 처리 및 결과 회신
                                <br />
                                2. 수집하는 항목: 연락처, 이메일
                                <br />
                                3. 보유/이용 기간: 고객 요청 처리 후 3개월
                                <br />
                                4. 동의를 거부할 수 있으며, 거부 시 이용이 제한될 수 있습니다.
                            </p>
                        </ModalContent>
                        <ModalFooter>
                            <CloseButton onClick={toggleModal}>닫기</CloseButton>
                        </ModalFooter>
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
      width: 700px;
    }

    @media screen and (max-width: 700px) {
      width: 90%;
    }
`;

const Divider = styled.div`
    width: 1000px;
    height: 1px;
    margin: 0 auto;
    background-color: #ddd;
    margin-top: 20px;
    margin-bottom: 60px;
`;

const Instructions = styled.p`
    font-size: 14px;
    color: #555;
    margin-bottom: 20px;
    text-align: left;
`;

const FormGroup = styled.div`
    margin-bottom: 20px;
`;

const Label = styled.label`
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
    color: #333;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
`;

const TextArea = styled.textarea`
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    min-height: 100px;
`;

const Agreement = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Checkbox = styled.input`
    margin-right: 10px;
`;

const ViewDetails = styled.button`
    background: none;
    border: none;
    color: blue;
    text-decoration: underline;
    cursor: pointer;
`;


const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
`;

const CancelButton = styled.button`
    padding: 10px 20px;
    background: #ccc;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const SubmitButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
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
    width: 400px;
`;

const ModalHeader = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const ModalContent = styled.div`
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 20px;
`;

const ModalFooter = styled.div`
    text-align: right;
`;

const CloseButton = styled.button`
    padding: 10px 20px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

export default ContactPage;
