import React, { useState } from "react";
import KeywordButton from "../../../components/KeywordButton";
import styled from "styled-components";
import theme from "../../../styles/theme";
import WaringIcon from "../../../assets/warning.svg";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 15px;
  margin-bottom: 35px;
  transition: height 0.3s ease;
`;

const SuggestText = styled.div`
  display: flex;
  gap: 7px;
  font-size: 13px;
  font-weight: 500;
  color: ${theme.colors.text[200]};
  margin-bottom: 15px;
`;

const HashtagSection = styled.div`
  width: 100%;
  text-align: left;
  gap: 5px;
  overflow: hidden;
    height: ${(props) => (props.showAll ? "32%" : "20%")}; /* 높이 조절 */
  transition: height 0.3s ease; /* 부드러운 애니메이션 */
`;

const AllButton = styled.button`
  background-color: ${theme.colors.primary[100]};
  border-radius: 10px;
  padding: 5px 12px;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  color: white;
  margin-right: 5px;
  border: none;
`;

const AddButton = styled.button`
  background-color: ${theme.colors.primary[200]};
  border-radius: 10px;
  padding: 5px 12px;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  color: white;
  border: none;
`;

export default function HashtagHeader() {
  const keywords = [
    "홍수",
    "가뭄",
    "오물풍선",
    "폭염",
    "해일",
    "산사태",
    "우박",
    "테러",
    "전쟁",
    "교통 사고",
    "건물 붕괴",
    "방사능",
    "한파",
    "화재",
    "태풍",
    "감염병",
    "지진",
    "황사",
    "폭설",
    "산불",
  ];

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedKeywords = showAll ? keywords : keywords.slice(0, 7); // 처음 7개만 표시

  return (
    <MainContainer>
      <SuggestText>
        <img src={WaringIcon} alt="Warning Icon" />
        확인할 재난 뉴스 키워드를 선택해보세요!
      </SuggestText>
      <HashtagSection showAll={showAll}>
        <AllButton>전체보기</AllButton>
        {displayedKeywords.map((keyword, index) => (
          <KeywordButton key={index} keyword={keyword} />
        ))}
        <AddButton onClick={toggleShowAll}>
          {showAll ? "접기" : "더보기"}
        </AddButton>
      </HashtagSection>
    </MainContainer>
  );
}
