import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";
import Bookmark_active from "../assets/bookmark_active.svg";
import Bookmark_deactive from "../assets/bookmark_deactive.svg";

const Head = styled.div`
  display: flex;
  flex-direction: row;
`;

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
`;

const NewsTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const BookmarkIcon = styled.img`
  cursor: pointer;
  margin: ${({ isActive }) => (isActive ? "0 10px 0 0" : "0")}; /* active 상태일 때 margin 적용 */
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${theme.colors.primary[100]};
  color: white;
  font-size: 14px;
`;

const CloseButton = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ededed;
  color: black;
  font-size: 14px;
`;

export default function NewsHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [isBookmarked, setIsBookmarked] = useState(false); // 북마크 상태

  const handleBookmarkClick = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const handleModalConfirm = () => {
    setIsBookmarked(true); // 북마크 활성화
    setIsModalOpen(false); // 모달 닫기
  };

  const handleModalCancel = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <>
      <Head>
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
        <BookmarkIcon
          src={isBookmarked ? Bookmark_active : Bookmark_deactive}
          alt="Bookmark"
          onClick={handleBookmarkClick}
          isActive={isBookmarked} // active 상태를 전달
        />
      </Head>

      {/* 모달 */}
      {isModalOpen && (
        <ModalBackground>
          <ModalContainer>
            <p>저장하시겠습니까?</p>
            <div>
              <Button onClick={handleModalConfirm}>저장</Button>
              <CloseButton onClick={handleModalCancel}>닫기</CloseButton>
            </div>
          </ModalContainer>
        </ModalBackground>
      )}
    </>
  );
}
