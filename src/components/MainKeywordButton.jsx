import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleHashtag } from "../store/hashtag";
import theme from "../styles/theme";

const StyledKeyword = styled.div`
  background-color: ${(props) =>
    props.isSelected ? theme.colors.primary[100] : "white"};
  border: 1px solid ${theme.colors.primary[100]};
  border-radius: 10px;
  padding: 5px 10px;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  color: ${(props) =>
    props.isSelected ? "white" : theme.colors.primary[100]};
  margin-right: 5px;
  margin-bottom: 8px;
  cursor: pointer;
`;

export default function MainKeywordButton({ keyword }) {
  const dispatch = useDispatch();
  const selectedHashtags = useSelector((state) => state.hashtag.selectedHashtags);

  // "전체보기"가 활성화 조건: 선택된 해시태그가 없거나 "전체보기"가 포함되어 있을 때
  const isSelected =
    selectedHashtags.length === 0 || selectedHashtags.includes("전체보기")
      ? keyword === "전체보기"
      : selectedHashtags.includes(keyword);

  const handleClick = () => {
    dispatch(toggleHashtag(keyword));
  };

  return (
    <StyledKeyword isSelected={isSelected} onClick={handleClick}>
      {keyword === "전체보기" ? keyword : `# ${keyword}`}
    </StyledKeyword>
  );
}
