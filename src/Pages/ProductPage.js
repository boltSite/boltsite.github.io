import React from 'react';
import styled from 'styled-components';

const ProductPage = (props) => {

    return (
        <Container>
            <Title>{props.title}</Title>
            <Divider />
            <MiddleContainer>
                <ImageGrid>
                    {Object.entries(props.images).map(([name, image], index) => (
                        <ImageWrapper key={index}>
                            <StyledImage src={image} alt={`Introduction ${index + 1}`} />
                            <span>{name}</span>
                        </ImageWrapper>
                    ))}
                </ImageGrid>
            </MiddleContainer>
        </Container>
    );
}

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
    margin-bottom: 60px;

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

const ImageGrid = styled.div`
    width: 1100px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 1100px) {
      width: 700px;
    }

    @media screen and (max-width: 700px) {
      width: 90%;
    }
`;

const ImageWrapper = styled.div`
    width: calc(33.3% - 14px);;
    display: flex;
    flex-direction: column;
    
    span {
        display: inline-block;
        font-size: 16px;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 15px;
        color: #434343;

        &:hover {
        color: #352D68;
        }
    }
        
    @media screen and (max-width: 1100px) {
        span {
            font-size: 14px;
            padding-top: 15px;
            padding-bottom: 10px;
        }
    }

    @media screen and (max-width: 700px) {
        width: calc(50% - 10px);
        
        span {
            font-size: 12px;
            padding-top: 10px;
            padding-bottom: 5px;
        }
    }
`;

const StyledImage = styled.img`
    width: 100%;
    height: 352px;
    border: 1px solid #ddd;
`;

export default ProductPage;