import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios"; // Axios 임포트
import { resetHashtags } from "../../store/hashtag";
import HashtagHeader from "./components/HashtagHeader";
import NewsSection from "./components/NewsSection";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import * as S from "./Mainpage.style";

export default function Main() {
  const dispatch = useDispatch();
  const selectedHashtags = useSelector(
    (state) => state.hashtag.selectedHashtags
  ); // Redux 상태에서 키워드 가져오기

  const [newsData, setNewsData] = useState([
    {
      article_id: 1,
      image: "example1",
      title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라1`,
      keywords: ["화재사고", "화재", "추락"],
    },
    {
      article_id: 2,
      image: "example1",
      title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라2`,
      keywords: ["화재", "화재사고", "추락"],
    },
    {
      article_id: 3,
      image: "example1",
      title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라3`,
      keywords: ["화재", "화재사고", "추락"],
    },
    {
      article_id: 4,
      image: "example1",
      title: `111고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라3`,
      keywords: ["우박", "화재", "추락"],
    },
    {
      article_id: 5,
      image: "example1",
      title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라3`,
      keywords: ["화재사고", "화재", "추락"],
    },
    {
      article_id: 6,
      image: "example1",
      title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라3`,
      keywords: ["화재사고", "화재", "추락"],
    },
    {
      article_id: 7,
      image: "example1",
      title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라3`,
      keywords: ["화재사고", "화재", "추락"],
    },
    {
      article_id: 8,
      image: "example1",
      title: `666고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라3`,
      keywords: ["코로나", "화재", "감염병"],
    },
  ]);

  const allKeywords = [
    "전체보기",
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

  useEffect(() => {
    dispatch(resetHashtags()); // Redux 상태 초기화
  }, [dispatch]);

  useEffect(() => {
    const fetchAllNews = async () => {
      if (!selectedHashtags.includes("전체보기")) return; // 전체보기가 선택된 경우만 요청

      try {
        const response = await axios.post("/api/news", {
          keyword: allKeywords, // 전체 키워드 묶어서 요청
        });

        if (response.data.code === 200) {
          setNewsData(response.data.articles); // 성공적으로 데이터 받아오면 설정
        } else {
          throw new Error(response.data.message || "Failed to fetch news");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllNews();
  }, [selectedHashtags]);

  // 키워드 기반 필터링
  const filteredNews =
    selectedHashtags.includes("전체보기") || selectedHashtags.length === 0
      ? newsData // 전체보기 또는 아무 키워드도 선택되지 않았을 때
      : newsData.filter((news) =>
          news.keywords.some((keyword) => selectedHashtags.includes(keyword))
        ); // 선택된 키워드 중 하나라도 포함되면 필터링

  return (
    <S.App>
      <Header page="메인페이지" />
      <S.Container>
        <HashtagHeader />
        <NewsSection newsData={filteredNews} /> {/* 필터링된 데이터 전달 */}
      </S.Container>
      <Footer isNews={true} />
    </S.App>
  );
}
