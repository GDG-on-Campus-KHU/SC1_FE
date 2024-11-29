import React from "react";
import { useNavigate } from "react-router-dom"; // 경로 이동을 위한 Hook
import NewsComponent from "../../../components/NewsComponent";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열 */
  gap: 18px; /* 아이템 간 간격 */
  width: 100%;
  padding-bottom: 10px;
  overflow-y: auto;
  padding-bottom: 9dvh;
`;

export default function NewsSection({ newsData }) {
  const navigate = useNavigate(); // useNavigate 사용

  const handleClick = (id) => {
    console.log(id);
    navigate(`/detail/${id}`); // 클릭 시 /detail/:id로 이동
  };

  return (
    <Container>
      {newsData.map((news) => (
        <NewsComponent
          key={news.id} // 고유 키
          title={news.title}
          tag={news.keywords[0]}
          onClick={() => handleClick(news.id)}
          keywords={news.keywords}
        />
      ))}
    </Container>
  );
}
