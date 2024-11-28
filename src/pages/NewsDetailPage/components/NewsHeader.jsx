import React from 'react'
import styled from 'styled-components'
import theme from '../../../styles/theme';

const Container = styled.div`
     display: flex;
     flex-direction: column;
     width: 100%;
     text-align: left;
     gap: 5px;
`;

const Tags = styled.div`
     display: flex;
     width: 100%;
     gap: 5px;
`;

const Tag = styled.div`
    background-color: ${theme.colors.primary[100]};   
    border-radius: 10px;     
    padding: 5px 10px;      
    text-align: center;      
    display: inline-block;   
    font-size: 10px;        
    color: white;        
`;

const NewsInfo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 5px;
    font-size: 13px;
`

const NewsTitle = styled.div`
    font-size: 24px;
    font-weight: 700;
`

export default function NewsHeader() {
  return (
    <Container>
        <Tags>
            <Tag># 홍수</Tag>
            <Tag># 화재사고</Tag>
        </Tags>
        <NewsTitle>기사제목기사제목</NewsTitle>
        <NewsInfo>
            <div>한겨레신문</div>
            <div>|</div>
            <div>2024.11.19</div>
        </NewsInfo>
    </Container>
  )
}