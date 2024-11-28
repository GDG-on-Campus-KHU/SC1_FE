import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetHashtags } from "../../store/hashtag";
import HashtagHeader from "./components/HashtagHeader";
import NewsSection from "./components/NewsSection";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import * as S from "./Mainpage.style";

export default function Main() {
  const dispatch = useDispatch();
  const selectedHashtags = useSelector((state) => state.hashtag.selectedHashtags); // Redux 상태에서 키워드 가져오기

  const newsData = [
    { id: 1, title: "고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라", tag: "화재사고" },
    { id: 2, title: "고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라", tag: "화재사고" },
    { id: 3, title: "고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라", tag: "화재사고" },
    { id: 4, title: "고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라", tag: "화재사고" },
    { id: 5, title: "고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라", tag: "산사태" },
    { id: 6, title: "고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라", tag: "화재사고" },
    { id: 7, title: "고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라", tag: "산사태" },
    { id: 8, title: "고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라", tag: "화재사고" },
    { id: 9, title: "고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라", tag: "화재사고" },
    { id: 10, title: "고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라", tag: "방사능" },
    { id: 11, title: "고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라", tag: "화재사고" },
    { id: 12, title: "고흥·여수 해상서 선박 화재 낚시객 추락 사고 잇따라", tag: "화재사고" },
  ];

  useEffect(() => {
    dispatch(resetHashtags()); // Redux 상태 초기화
  }, [dispatch]);

  // 키워드 기반 필터링
  const filteredNews = selectedHashtags.includes("전체보기") || selectedHashtags.length === 0
    ? newsData // 전체보기 또는 아무 키워드도 선택되지 않았을 때
    : newsData.filter((news) => selectedHashtags.includes(news.tag)); // 선택된 키워드에 해당하는 뉴스만 필터링

  return (
    <S.App>
      <Header />
      <S.Container>
        <HashtagHeader />
        <NewsSection newsData={filteredNews} /> {/* 필터링된 데이터 전달 */}
      </S.Container>
      <Footer />
    </S.App>
  );
}
