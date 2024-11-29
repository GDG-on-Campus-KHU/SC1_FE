import React, {useState, useEffect} from 'react'
import axios from 'axios';
import NewsHeader from './components/NewsHeader'
import NewsContent from './components/NewsContent';
import NewsGo from './components/NewsGo';
import * as S from "./NewsDetailPage.style";
import BackHeader from '../../components/header/BackHeader';
import { useParams } from "react-router-dom"; // useParams로 article_id 가져오기
import Footer from '../../components/footer';

export default function NewsDetailPage() {
    const { id } = useParams(); // URL에서 article_id 가져오기
    const BASE_URL = import.meta.env.VITE_APP_SERVER_URL; // .env에서 API 서버 URL 가져오기
    const [article, setArticle] = useState(
        {
          "title": "news_title_example_1",
          "article_id": "235",   // 데이터베이스의 News 테이블에 저장된 identifier
          "url": "http://disaster.news.com/sample_article_1234",
          "source": "disaster_news",
          "summary": "This is a brief summary of the news article!",
          "keywords": ["A", "B", "C"],
          "date": "2024-11-28",
          "image_url": "https://disaster.news.com/news.image.jpgjpg"  // 이미지가 있는 경우
        }
      ); // 기사 데이터를 저장할 상태

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/news/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // 토큰 가져오기
                        "Content-Type": "application/json",
                    },
                });

                if (response.data.code === 200) {
                    setArticle(response.data.article); // 기사 데이터 저장
                } else {
                    throw new Error(response.data.message || "Failed to fetch article");
                }
            } catch (err) {
                console.log(err);
            };
        }

        fetchArticle();
    }, [id]); // article_id가 변경될 때마다 실행

    return (
        <S.App>
            <BackHeader/>
            <S.Container>
                <NewsHeader keywords={article.keywords} title={article.title} source={article.source} date={article.date} id={id}  />
                <NewsContent summary={article.summary} image_url={article.image_url} />
                <NewsGo url={article.url}/>
            </S.Container>
            <Footer isNews={true} />
        </S.App>
    )
}