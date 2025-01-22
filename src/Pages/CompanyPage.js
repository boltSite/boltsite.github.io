import React from 'react';
import styled from 'styled-components';

const CompanyPage = (props) => {
    
    return (
        <Container>
            <Title>{props.title}</Title>
            <Divider />
            <ImageGrid>
                {props.images.map((image, index) => (
                    <ImageWrapper key={index}>
                        <StyledImage src={image} alt={`Introduction ${index + 1}`} />
                    </ImageWrapper>
                ))}
            </ImageGrid>
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

const ImageGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
`;

const ImageWrapper = styled.div`
    width: 1000px;
    margin: 0 auto;
`;

const StyledImage = styled.img`
    width: 100%;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export default CompanyPage;