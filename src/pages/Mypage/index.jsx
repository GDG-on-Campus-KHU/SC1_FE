import { useEffect, useState } from "react";
import * as S from "./Mypage.style";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Profile from "./components/Profile";
import Keyword from "./components/Keyword";
import News from "./components/News";
import { resetHashtags } from "../../store/hashtag";

export default function Mypage() {
  const [comment, setComment] = useState("오늘도 안전한 하루 되세요 ! 🍀"); // 랜덤으로 코멘트 불러옴

  const [keyword, setKeyword] = useState(["폭설", "한파", "해일", "화재"]);

  const [news, setNews] = useState([
    {
      article_id: 1,
      image_url:
        "https://news.kbs.co.kr/data/news/title_image/newsmp4/newsplaza_p1/2024/11/29/20_8118406.jpg",
      title: `폭설 뒤 기온 ‘뚝’…전국 곳곳에 다시 눈·비 [출근길 날씨]`,
      keywords: ["폭설"],
    },
    {
      article_id: 3,
      image_url:
        "https://www.chosun.com/resizer/v2/N3TB5MT27ZNJTETJRGPMLAYXQA.JPG?auth=f2587cc0dac5e332bb159913112f0d6856f47e17a93e375f2afb4966f4d079c5&width=616",
      title: "폭설 뒤 기습 한파… 주말까지 겨울 추위 계속",
      keywords: ["폭설", "한파"],
    },
    {
      article_id: 8,
      image_url:
        "https://news.kbs.co.kr/data/news/2024/11/29/20241129_rarqjr.jpg",
      title: `경기 김포시 가건물에서 화재…“인명피해 없어”`,
      keywords: ["화재"],
    },
    {
      article_id: 10,
      image_url: null,
      title: `전남 목포에 해일주의보`,
      keywords: ["해일"],
    },
  ]);

  const receivedNews = useSelector((state) => state.news);
  const selectedHashtags = useSelector(
    (state) => state.hashtag.selectedHashtags
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userId = localStorage.getItem("id"); // 로그인에서 가져온 유저 정보는 로컬 스토리지에 저장
  const userName = localStorage.getItem("userName"); // 로그인에서 가져온 유저 정보는 로컬 스토리지에 저장
  const accessToken = localStorage.getItem("accessToken");

  const getSavedNews = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/user/article`,
        {
          user_id: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("res");

      const articles = res.articles;
      articles.map((value) => {
        dispatch(setNews(value));
      });

      console.log(receivedNews); // store에 저장 잘 되었는지 확인
    } catch (error) {
      console.log(error);
    }
  };

  /* 서버 연동 시 주석 해제 */
  useEffect(() => {
    getSavedNews();
  }, []);

  useEffect(() => {
    dispatch(resetHashtags());
  }, []);

  const filteredNews =
    selectedHashtags.includes("전체보기") || selectedHashtags.length === 0
      ? news // 전체보기 또는 아무 키워드도 선택되지 않았을 때
      : news.filter((news) => selectedHashtags.includes(news.keywords[0])); // 선택된 키워드에 해당하는 뉴스만 필터링

  useEffect(() => {
    console.log("selectedHashtags: ", selectedHashtags);
    console.log("filteredNews: ", filteredNews);
  }, [filteredNews]);

  return (
    <S.App>
      <Header page={"마이페이지"} />
      <S.Container>
        <Profile name={userName} comment={comment} />
        {/* <Profile name={userName} comment={comment} /> */}
        <S.Line />
        <Keyword keyword={keyword} />
        <News news={filteredNews} />
      </S.Container>
      <Footer isMypage={true} />
    </S.App>
  );
}
