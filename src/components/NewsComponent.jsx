import React, { useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import KeywordModal from "./keywordModal";

const Container = styled.div`
  width: 100%;
  height: 166px;
  background-color: ${({ imageUrl }) => (imageUrl ? "transparent" : "#e8e8e8")};
  background-image: ${({ imageUrl }) => (imageUrl ? `url(${imageUrl})` : "none")};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center; /* "이미지가 없습니다" 텍스트 중앙 정렬 */
  background-size: cover;
  position: relative; /* 텍스트를 이미지 위에 배치 가능하도록 설정 */
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
  font-size: 12px;
  margin-bottom: 4px;
  font-family: "Noto Sans KR";
`;

const Tag = styled.div`
  background-color: ${theme.colors.primary[100]};
  width: 40px;
  border-radius: 10px;
  padding: 4px 8px;
  text-align: center;
  display: inline-block;
  font-size: 9px;
  font-family: "Noto Sans KR";
  color: white;
  cursor: pointer;
`;

const PlaceholderText = styled.div`
  display: flex;
  margin-bottom: 25px;
  font-size: 10px;
  color: #666;
  font-family: "Noto Sans KR";
  display: ${({ imageUrl }) => (imageUrl ? "none" : "block")}; /* 이미지가 있을 때 숨김 */
`;

export default function NewsComponent({ key, title, tag, keywords, onClick }) {
  const truncateTitle = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Container onClick={onClick}>
        <PlaceholderText imageUrl={image_url}>기사 이미지가 없습니다</PlaceholderText>
        <TitleContainer>
          <Title>{truncateTitle(title, 26)}</Title>
          <Tag
            onClick={(e) => {
              e.stopPropagation();
              handleModal();
            }}
          >
            #{tag}
          </Tag>
        </TitleContainer>
        <KeywordModal isOpen={isModalOpen} keywords={keywords} />
      </Container>
    </>
  );
}
