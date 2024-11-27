import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 수평 중앙 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
  width: 100%;
  text-align: center;
`;

const Image = styled.div`
  display: flex;
  width: 90%;
  height: 200px;
  border-radius: 10px;
  background-color: #E8E8E8;
  margin-top: 35px; 
`;

const Content = styled.div`
  display: flex;
  width: 90%;
  margin-top: 35px;
  text-align: left;
  font-size: 13px;
  line-height: 22px; 
`;

const Line = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background-color: #E8E8E8;
`;

export default function NewsContent() {
  return (
    <Container>
      <Image />
      <Content>
        기사 요약하기 기사 요약하기 기사 요약하기 <br></br>
        기사 요약하기 기사 요약하기 기사 요약하기 <br></br>
        기사 요약하기 기사 요약하기 기삭 요약하기 <br></br>
      </Content>
    </Container>
  )
}