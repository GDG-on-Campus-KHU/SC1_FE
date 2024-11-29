import React from 'react';
import styled from 'styled-components';
import Goto from '../../../assets/goto.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 45px;
`;

const Line = styled.div`
  display: flex;
  width: 100%;
  height: 1px;
  background-color: #D4D4D8;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; /* 세로 중앙 정렬 */
  gap: 8px;
  width: 100%;
  margin-top: 15px;
  font-size: 11px;
`;

const StyledLink = styled.a`
  text-decoration: underline; /* 밑줄 추가 */
  color: #4A4848; /* 부모 요소의 색상 상속 */
  &:hover {
    color: #007BFF; /* 링크에 호버 시 색상 변경 (선택 사항) */
  }
  font-size: 12px;
  font-family: "Noto Sans KR";
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 35px;
  font-family: "Noto Sans KR";
`;

export default function NewsGo({url}) {
  return (
    <Container>
      <Line />
      <Title>
        기사 원문 바로가기
      </Title>
      <LinkContainer>
        <img src={Goto} alt="goto-icon" />
        <StyledLink
          href="https://imnews.imbc.com/news/2024/world/#page=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          {url}
        </StyledLink>
      </LinkContainer>
    </Container>
  );
}
