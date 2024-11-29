import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom"; // React Router를 사용한 경로 이동
import theme from "../../styles/theme";
import Logo from "../../assets/logo.svg";
import * as S from "./Splashpage.style";

// 나타나는 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 사라지는 애니메이션 정의
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const appearInCenter = keyframes`
  from {
    opacity: 0;
    transform: scale(1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// TextContainer 스타일 정의
const TextContainer = styled.div`
  display: flex;
  gap: 3px; /* 글자 간 간격 */
  font-size: 36px;
  font-weight: 900;
  position: relative;

  div {
    opacity: 0; /* 초기값 */
    animation: ${fadeIn} 0.5s ease-out forwards,
      ${fadeOut} 0.5s ease-in forwards 1.6s;
  }

  /* 각 글자에 순차적으로 딜레이 적용 (fadeIn만) */
  div:nth-child(1) {
    animation-delay: 0s, 1s;
    color: ${theme.colors.primary[200]};
  }
  div:nth-child(2) {
    animation-delay: 0.2s, 1s;
    color: ${theme.colors.primary[200]};
  }
  div:nth-child(3) {
    animation-delay: 0.4s, 1s;
    color: ${theme.colors.primary[200]};
  }
  div:nth-child(4) {
    animation-delay: 0.6s, 1s;
    color: ${theme.colors.primary[200]};
  }
`;

// CenterContainer 스타일 정의
const CenterContainer = styled.div`
  display: flex;
  position: relative;
  gap: 10px;
  margin-top: -50px;
  margin-left: -90px;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: ${appearInCenter} 0.5s ease-out forwards;
  animation-delay: 1.6s; /* 모든 글자가 사라진 후 나타남 */
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 36px;
  font-weight: 900;
  color: ${theme.colors.primary[200]};
`;

// Logo 이미지 스타일
const LogoImage = styled.img`
  width: 80px;
  height: auto;
  margin-bottom: 16px;
`;

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    // 애니메이션이 끝난 후 경로 이동
    const timer = setTimeout(() => {
      navigate("/login"); // '/' 경로로 이동
    }, 3000); // 모든 애니메이션이 끝난 후 (1.6s + 여유시간)

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, [navigate]);

  return (
    <S.App>
      <S.Container>
        <TextContainer>
          <div>재</div>
          <div>난</div>
          <div>노</div>
          <div>티</div>
        </TextContainer>
        <CenterContainer>
          <LogoImage src={Logo} alt="Logo" />
          <div>재티</div>
        </CenterContainer>
      </S.Container>
    </S.App>
  );
}
