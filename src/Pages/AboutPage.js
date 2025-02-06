import React, { useEffect } from 'react';
import styled from 'styled-components';
import UserIcon from '../imgs/userIcon.png';
import InformationIcon from '../imgs/informationIcon.png';
import PhoneIcon from '../imgs/phoneIcon.png';
import ClockIcon from '../imgs/clockIcon.png';
import PinIcon from '../imgs/pinIcon.png';
import RoadIcon from '../imgs/roadIcon.png';
import DeliveryIcon from '../imgs/deliveryIcon.png';
import BoxIcon from '../imgs/boxIcon.png';
import ParkingIcon from '../imgs/parkingIcon.png';

const AboutPage = () => {
    useEffect(() => {
        const { naver } = window;
        if (naver && naver.maps) {
            const map = new naver.maps.Map('map', {
                center: new naver.maps.LatLng(37.6470638602758, 126.597890545654),
                zoom: 10,
            });
    
            // 동산볼트 본사
            const marker1 = new naver.maps.Marker({
                position: new naver.maps.LatLng(37.6470638602758, 126.597890545654),
                map,
            });
    
            const infoWindow1 = new naver.maps.InfoWindow({
                content: '<div style="padding:5px; background:white; border-radius:5px; font-size:12px;">동산볼트 본사</div>',
            });
    
            // 동산볼트 영종도점
            const marker2 = new naver.maps.Marker({
                position: new naver.maps.LatLng(37.4946690414343, 126.537630171867),
                map,
            });
    
            const infoWindow2 = new naver.maps.InfoWindow({
                content: '<div style="padding:5px; background:white; border-radius:5px; font-size:12px;">동산볼트 영종도점</div>',
            });
    
            // 마커에 클릭 이벤트 추가
            naver.maps.Event.addListener(marker1, 'click', () => {
                infoWindow1.open(map, marker1);
                infoWindow2.close();
            });
    
            naver.maps.Event.addListener(marker2, 'click', () => {
                infoWindow2.open(map, marker2);
                infoWindow1.close();
            });
    
            // 기본적으로 두 개의 마커 모두 InfoWindow가 열린 상태 유지
            infoWindow2.open(map, marker2);
            infoWindow1.open(map, marker1);
        }
    }, []);

    return (
        <Container>
            <Title>오시는 길</Title>
            <Divider />
            <MiddleContainer>
            <MapContainer id="map" />
            <TitleContainer style={{ marginBottom: '10px' }}>
                <TitleLeft>
                    <span>동산볼트 본사</span>
                    <h3>경기도 김포시 대곶면 종생로 101</h3>
                </TitleLeft>
                <TitleRight>
                    <button onClick={() => window.open("https://map.naver.com/p/directions/-/14092803.611160208,4529703.182250712,%EB%8F%99%EC%82%B0%EB%B3%BC%ED%8A%B8,,/-/transit?c=15.00,0,0,0,dh", "_blank")}>&ensp;<img src={RoadIcon} style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }}/>&nbsp;길찾기&ensp;</button>
                    <button onClick={() => window.open("https://map.naver.com/p?title=%EB%8F%99%EC%82%B0%EB%B3%BC%ED%8A%B8&lng=126.5978088&lat=37.6471786&zoom=15&type=0&c=15.00,0,0,0,dh", "_blank")}>&ensp;<img src={PinIcon} style={{ width: '15px', height: '15px', filter: 'brightness(0) invert(1)' }}/>&nbsp;지도에서 보기&ensp;</button>
                </TitleRight>
            </TitleContainer>
            <TitleContainer style={{ height: '80px', paddingTop: '30px', borderTop: '1px solid #e9e9e9' }}>
            <TitleLeft>
                    <span>동산볼트 영종도점</span>
                    <h3>인천광역시 중구 전소로1번길 9-20, 1호</h3>
                </TitleLeft>
                <TitleRight>
                    <button onClick={() => window.open("https://map.naver.com/p/directions/-/14092803.611160208,4529703.182250712,%EB%8F%99%EC%82%B0%EB%B3%BC%ED%8A%B8,,/-/transit?c=15.00,0,0,0,dh", "_blank")}>&ensp;<img src={RoadIcon} style={{ width: '18px', height: '18px', filter: 'brightness(0) invert(1)' }}/>&nbsp;길찾기&ensp;</button>
                    <button onClick={() => window.open("https://map.naver.com/p?title=%EB%8F%99%EC%82%B0%EB%B3%BC%ED%8A%B8&lng=126.5978088&lat=37.6471786&zoom=15&type=0&c=15.00,0,0,0,dh", "_blank")}>&ensp;<img src={PinIcon} style={{ width: '15px', height: '15px', filter: 'brightness(0) invert(1)' }}/>&nbsp;지도에서 보기&ensp;</button>
                </TitleRight>
            </TitleContainer>
            <Section>
                <SectionLeft><img src={PinIcon} /><span>오시는 길</span></SectionLeft>
                <SectionRight>대곶 IC 인근<br/>
                <RightDiv><span style={{ color: '#999' }}>주차정보 |</span>&nbsp;주차 공간 있습니다.</RightDiv></SectionRight>
            </Section>
            <Section>
                <SectionLeft><img src={ClockIcon} /><span>영업시간</span></SectionLeft>
                <SectionRight>
                    <RightDiv><RightTitle>평일</RightTitle>08:00 - 18:00</RightDiv>
                    <RightDiv><RightTitle>토요일</RightTitle>08:00 - 15:00</RightDiv>
                </SectionRight>
            </Section>
            <Section>
                <SectionLeft><img src={PhoneIcon} /><span>전화번호</span></SectionLeft>
                <SectionRight>031-982-6773</SectionRight>
            </Section>
            <Section>
                <SectionLeft><img src={InformationIcon} /><span>이용안내</span></SectionLeft>
                <SectionIconRight>
                    <IconDiv><img src={ParkingIcon} />주차</IconDiv>
                    <IconDiv><img src={BoxIcon} />포장</IconDiv>
                    <IconDiv><img src={DeliveryIcon} />배달</IconDiv>
                </SectionIconRight>
            </Section>
            <Section>
                <SectionLeft><img src={UserIcon} /><span>사업자정보</span></SectionLeft>
                <SectionRight>
                    <RightDiv><RightTitle>상호명</RightTitle>동산볼트</RightDiv>
                    <RightDiv><RightTitle>대표자</RightTitle>전명호</RightDiv>
                    <RightDiv><RightTitle>사업자번호</RightTitle>106-12-53507</RightDiv>
                    <RightDiv><RightTitle>이메일</RightTitle>dongsanbolt@daum.net</RightDiv>
                </SectionRight>
            </Section>
            </MiddleContainer>
        </Container>
    );
};

const Container = styled.div`
    padding: 40px;
    text-align: center;
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

    @media screen and (max-width: 1100px) {
      width: 700px;
    }

    @media screen and (max-width: 700px) {
      width: 90%;
    }
`;

const MapContainer = styled.div`
    width: 1000px;
    height: 400px;
    margin-top: 60px;
    margin-bottom: 20px;

    @media screen and (max-width: 1100px) {
      width: 700px;
    }

    @media screen and (max-width: 700px) {
      width: 90%;
    }
`;

const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleContainer = styled.div`
    width: 1000px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 40px;

    @media screen and (max-width: 1100px) {
        width: 700px;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const TitleLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    span {
        font-size: 15px;
    }

    h3 {
        color: #638DC6;
    }

    @media screen and (max-width: 1100px) {
        span {
            font-size: 15px;
        }
        
        h3 {
            font-size: 24px;
        }
    }

    @media screen and (max-width: 700px) {
        align-items: center;

        span {
            font-size: 14px;
        }
        
        h3 {
            font-size: 22px;
        }
    }
`;

const TitleRight = styled.div`
    width: 230px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        height: 40px;
        background-color: #638DC6;
        color: white;
        border: none;
        font-size: 13px;
    }
`;

const Section = styled.div`
    width: 1000px;
    height: 113px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #e9e9e9;

    @media screen and (max-width: 1100px) {
        width: 700px;
    }

    @media screen and (max-width: 700px) {
        width: 400px;
    }
`;

const SectionLeft = styled.div`
    width: 12%;
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        width: 16px;
        height: 16px;
        filter: opacity(0.2) drop-shadow(0 0 0 #e9e9e9);
    }

    span {
        font-size: 14px;
        font-weight: bold;
        padding-left: 1rem;
    }

    @media screen and (max-width: 1100px) {
        width: 20%;

        span {
            font-size: 14px;
        }
    }

    @media screen and (max-width: 700px) {
        width: 53%;

        span {
            font-size: 13px;
        }
    }
`;

const SectionRight = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 14px;
    text-align: left;
    color: #555;

    @media screen and (max-width: 700px) {
        font-size: 13px;
    }
`;

const SectionIconRight = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const RightDiv = styled.div`
    display: block;
`;

const RightTitle = styled.span`
    width: 77px;
    display: inline-block;
    min-width: 40px;
    margin-right: 20px;
    color: #999;
`;

const IconDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-right: 20px;
    font-size: 14px;

    img {
        width: 40px;
        height: 40px;
    }

    @media screen and (max-width: 700px) {
        font-size: 13px;

        img {
            width: 33px;
            height: 33px;
        }
    }
`;

export default AboutPage;