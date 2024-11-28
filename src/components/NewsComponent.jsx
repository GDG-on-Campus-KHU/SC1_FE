import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const Container = styled.div`
    width: 100%;
    height: 166px;
    background-color: #E8E8E8;
    border-radius: 10px;
    display: flex; /* Flexbox 활성화 */
    flex-direction: column; /* 세로 방향 정렬 */
    justify-content: flex-end; /* 하단으로 배치 */
`;

const TitleContainer = styled.div`
    width: 100%;
    height: 82px;
    padding: 10px;
    box-sizing: border-box;
    background-color: white;
    text-align: left;
    border-radius: 0 0 10px 10px; /* 하단 모서리만 둥글게 설정 */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex; /* Flexbox 활성화 */
    flex-direction: column; /* 세로 방향 정렬 */
    justify-content: space-between; /* 하단으로 배치 */
`;

const Title = styled.div`
    font-size: 11px;
    margin-bottom: 4px;
`;

const Tag = styled.div`
    background-color: ${theme.colors.primary[100]};
    width: 40px;   
    border-radius: 10px;     
    padding: 4px 8px;      
    text-align: center;      
    display: inline-block;   
    font-size: 8px;        
    color: white;        
`;

export default function NewsComponent({ title, tag }) {
    const truncateTitle = (text, maxLength) => {
        return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    };

    return (
        <Container>
            <TitleContainer>
                <Title>{truncateTitle(title, 26)}</Title>
                <Tag>#{tag}</Tag>
            </TitleContainer>
        </Container>
    );
}