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
import { setNews } from "../../store/news";

export default function Mypage() {
  const [comment, setComment] = useState("오늘도 안전한 하루 되세요 ! 🍀"); // 랜덤으로 코멘트 불러옴

  const [keywords, setKeywords] = useState([
    "태풍",
    "코로나",
    "화재사고",
    "배고파",
    "지진",
    "홍수",
    "가뭄",
    "폭염",
    "오물풍선",
    "해일",
    "산사태",
    "우박",
    "테러",
    "전쟁",
  ]);

  // const [news, setNews] = useState([
  //   {
  //     article_id: 1,
  //     image: "example1",
  //     title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라1`,
  //     keywords: ["화재사고", "화재", "추락", "우박"],
  //   },
  //   {
  //     article_id: 2,
  //     image: "example1",
  //     title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라2`,
  //     keywords: ["화재", "화재사고", "추락"],
  //   },
  //   {
  //     article_id: 3,
  //     image: "example1",
  //     title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라3`,
  //     keywords: ["화재", "화재사고", "추락"],
  //   },
  //   {
  //     article_id: 4,
  //     image: "example1",
  //     title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라3`,
  //     keywords: ["우박", "화재", "추락"],
  //   },
  //   {
  //     article_id: 5,
  //     image: "example1",
  //     title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라3`,
  //     keywords: ["화재사고", "화재", "추락"],
  //   },
  //   {
  //     article_id: 6,
  //     image: "example1",
  //     title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라3`,
  //     keywords: ["화재사고", "화재", "추락"],
  //   },
  //   {
  //     article_id: 7,
  //     image: "example1",
  //     title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라3`,
  //     keywords: ["화재사고", "화재", "추락"],
  //   },
  //   {
  //     article_id: 8,
  //     image: "example1",
  //     title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라3`,
  //     keywords: ["코로나", "화재", "추락"],
  //   },
  // ]);

  const news = useSelector((state) => state.news);
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
      const res = await axios.post(
        "serverURL/api/user/article",
        {
          user_id: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(res);

      const articles = res.articles;
      articles.map((value) => {
        dispatch(setNews(value));
      });

      const allKeywords = [
        ...new Set(
          articles.reduce((acc, article) => acc.concat(article.keywords), [])
        ),
      ];
      setKeywords(allKeywords);

      console.log(allKeywords);

      console.log(news); // store에 저장 잘 되었는지 확인
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
      : news.filter((news) =>
          news.keywords.some((keyword) => selectedHashtags.includes(keyword))
        ); // 선택된 키워드 중 하나라도 포함되면 필터링

  return (
    <S.App>
      <Header page={"마이페이지"} />
      <S.Container>
        <Profile name={userName} comment={comment} />
        {/* <Profile name={userName} comment={comment} /> */}
        <S.Line />
        <Keyword keyword={keywords} />
        <News news={filteredNews} />
      </S.Container>
      <Footer isMypage={true} />
    </S.App>
  );
}
