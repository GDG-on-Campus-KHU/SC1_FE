import React from "react";
import * as S from "./KeywordModal.style";
export default function KeywordModal({ isOpen, keywords }) {
  console.log("keywords: ", keywords);

  if (!isOpen) return null;
  return (
    <S.Container>
      {keywords.map((value, index) => {
        return <S.Tag key={index}># {value}</S.Tag>;
      })}
    </S.Container>
  );
}
