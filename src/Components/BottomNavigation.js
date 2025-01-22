import React from 'react';
import styled from 'styled-components';
import icon from '../imgs/longLogo.png';

const BottomNavigation = () => {

    return (
        <div style={{ width: "100%", height: "160px" }}>
            <TopContainer>
                <Representative>
                    <img src={icon} alt="logo" />
                    <span>공식 상호 : 동산볼트</span>
                    <span>대표 이사 : 전명호</span>
                </Representative>
                <Divider />
                <HeadOffice>
                    <h6>본사</h6>
                    <span>사업자등록번호: 106-12-53507</span>
                    <span>경기도 김포시 대곶면 율생리 97-13</span>
                    <span>TEL : 031-982-6773 | FAX : 031-982-6774</span>
                </HeadOffice>
                <Divider />
                <Point>
                    <h6>영종도점</h6>
                    <span>사업자등록번호: 475-87-02993</span>
                    <span>인천광역시 중구 전소로1번길 9-20, 1호</span>
                    <span>TEL : 032-751-6773 | FAX : 032-751-6774</span>
                </Point>
                <Divider />
                <Information>
                    <span>홈페이지 관리자 : 전재현</span>
                    <span>개인정보보호 책임자 : 손도휘</span>
                    <span>이메일 : dongsanbolt@daum.net</span>
                </Information>
            </TopContainer>
            <BottomContainer>
                <span>Copyright ⓒ Dongsan Volt. Co. LTD All rights holdings.</span>
            </BottomContainer>
        </div>
    );
}

const TopContainer = styled.div`
    width: 100%;
    height: 80%;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #e9e9e9;
`;

const Divider = styled.div`
    width: 0.5px;
    height: 80%;
    background-color: black;
    margin-left: -3rem;
    margin-right: 4rem;
`;

const Representative = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;

    img {
        width: 150px;
        height: 50px;
        margin-bottom: 5px;
    }

    span {
        font-size: 12px;
        color: black;
        margin-bottom: 2px;
    }
`;

const HeadOffice = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;

    h6 {
        font-size: 14px;
        color: black;
    }

    span {
        font-size: 12px;
        color: black;
        margin-bottom: 2px;
    }
`;

const Point = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;

    h6 {
        font-size: 14px;
        color: black;
    }

    span {
        font-size: 12px;
        color: black;
        margin-bottom: 2px;
    }
`;

const Information = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;

    span {
        font-size: 12px;
        color: black;
        margin-bottom: 2px;
    }
`;

const BottomContainer = styled.div`
    width: 100%;
    height: 20%;
    background-color: #e9e9e9;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        font-size: 12px;
        color: black;
    }
`;

export default BottomNavigation;