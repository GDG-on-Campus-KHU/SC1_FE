import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
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
  padding: 4px 8px;
  text-align: center;
  display: inline-block;
  font-size: 11px;
  font-family: "Noto Sans KR";
  color: white;
`;

const NewsInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 5px;
  font-size: 13px;
  font-family: "Noto Sans KR";
`;

const NewsTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  font-family: "Noto Sans KR";
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
  z-index: 1200;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Noto Sans KR";
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
  font-family: "Noto Sans KR";
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
  font-family: "Noto Sans KR";
`;

export default function NewsHeader({ keywords, title, source, date, id }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [isBookmarked, setIsBookmarked] = useState(false); // 북마크 상태
  const BASE_URL = import.meta.env.VITE_APP_SERVER_URL;

  const handleBookmarkClick = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const handleModalConfirm = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/user/article`,
        { article_id: id }, // 요청 payload
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // 토큰 가져오기
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.code === 200) {
        alert(response.data.message); // 성공 메시지
        setIsBookmarked(true); // 북마크 활성화
        setIsModalOpen(false); // 모달 닫기
      } else {
        throw new Error(response.data.message || "Failed to save article.");
      }
    } catch (err) {
      alert(err.message || "Something went wrong."); // 에러 메시지
    }
  };

  const handleModalCancel = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <>
      <Head>
        <Container>
          <Tags>
            {keywords.map((keyword, index) => (
              <Tag key={index}># {keyword}</Tag>
            ))}
          </Tags>
          <NewsTitle>{title}</NewsTitle>
          <NewsInfo>
            <div>{source}</div>
            <div>|</div>
            <div>{date}</div>
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
