import { useState } from "react";
import * as S from "./Mypage.style";
export default function Mypage() {
  const [name, setName] = useState("000");
  const [comment, setComment] = useState("오늘도 안전한 하루 되세요 ! 🍀"); // 랜덤으로 코멘트 불러옴

  const [keyword, setKeyword] = useState([
    "태풍",
    "코로나",
    "화재사고",
    "배고파",
    "지진",
  ]);

  const [news, setNews] = useState([
    {
      image: "example1",
      title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라`,
      keyword: ["화재사고", "화재", "추락"],
    },
    {
      image: "example1",
      title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라`,
      keyword: ["화재사고", "화재", "추락"],
    },
    {
      image: "example1",
      title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라`,
      keyword: ["화재사고", "화재", "추락"],
    },
  ]);
  localStorage.getItem("userName"); // 로그인에서 가져온 유저 정보는 로컬 스토리지에 저장

  return (
    <S.App>
      <S.Container>
        <div id="profile">
          <h1>{name}님</h1>
          <p>{comment}</p>
        </div>
        <div id="keyword">
          <h1>저장한 키워드</h1>
          {keyword.map((value) => {
            return (
              <>
                <button>#{value}</button>
              </>
            );
          })}
        </div>
        {/* 스크롤 가능, grid */}
        <div id="news">
          {news.map((value) => {
            return (
              <>
                <img src={value.image} alt="뉴스 이미지" />
                <h2>{value.title}</h2>
                {value.keyword.map((value) => {
                  return (
                    <>
                      <button>#{value}</button>
                    </>
                  );
                })}
              </>
            );
          })}
        </div>
      </S.Container>
    </S.App>
  );
}
