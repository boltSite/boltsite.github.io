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
    font-size: 24px;
    font-weight: 600;
`;

const Divider = styled.div`
    width: 1000px;
    height: 1px;
    margin: 0 auto;
    background-color: #ddd;
    margin-top: 20px;
    margin-bottom: 60px;
`;

const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImageGrid = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
    width: 49%;
    display: flex;
    flex-direction: column;
    
    span {
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
        text-align: left;
        padding-top: 10px;
    }
`;

const StyledImage = styled.img`
    width: 100%;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export default ProductPage;