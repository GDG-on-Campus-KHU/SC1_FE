import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 수평 중앙 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
  width: 100%;
  text-align: center;
`;

const Image = styled.img`
  display: flex;
  width: 90%;
  height: 200px;
  border-radius: 10px;
  background-color: #e8e8e8;
  margin-top: 35px;
  object-fit: cover; /* 이미지 비율 유지 */
`;

const Content = styled.div`
  display: flex;
  width: 90%;
  margin-top: 35px;
  text-align: left;
  font-size: 14px;
  line-height: 22px;
  font-family: "Noto Sans KR";
`;

export default function NewsContent({ summary, image_url }) {
  return (
    <Container>
      {image_url && <Image src={image_url} alt="News" />}
      <Content>{summary}</Content>
    </Container>
  );
}
