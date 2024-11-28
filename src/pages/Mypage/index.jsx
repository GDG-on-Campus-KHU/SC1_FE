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
export default function Mypage() {
  const [name, setName] = useState("000");
  const [comment, setComment] = useState("오늘도 안전한 하루 되세요 ! 🍀"); // 랜덤으로 코멘트 불러옴

  const [keyword, setKeyword] = useState([
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

  const [news, setNews] = useState([
    {
      image: "example1",
      title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라1`,
      keyword: ["화재사고", "화재", "추락"],
    },
    {
      image: "example1",
      title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라2`,
      keyword: ["화재사고", "화재", "추락"],
    },
    {
      image: "example1",
      title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라3`,
      keyword: ["화재사고", "화재", "추락"],
    },
    {
      image: "example1",
      title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라3`,
      keyword: ["화재사고", "화재", "추락"],
    },
    {
      image: "example1",
      title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라3`,
      keyword: ["화재사고", "화재", "추락"],
    },
    {
      image: "example1",
      title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라3`,
      keyword: ["화재사고", "화재", "추락"],
    },
    {
      image: "example1",
      title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라3`,
      keyword: ["화재사고", "화재", "추락"],
    },
    {
      image: "example1",
      title: `고흥·여수 해상서 선박 화재\n 낚시객 추락 사고 잇따라3`,
      keyword: ["화재사고", "화재", "추락"],
    },
  ]);

  const receivedNews = useSelector((state) => state.news);
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
      console.log(receivedNews); // store에 저장 잘 되었는지 확인
    } catch (error) {
      console.log(error);
    }
  };

  /* 서버 연동 시 주석 해제 */
  // useEffect(() => {
  //   getSavedNews();
  // }, []);

  return (
    <S.App>
      <Header page={"마이페이지"} />
      <S.Container>
        <Profile name={name} comment={comment} />
        {/* <Profile name={userName} comment={comment} /> */}
        <S.Line />
        <Keyword keyword={keyword} />
        <News news={news} />
      </S.Container>
      <Footer isMypage={true} />
    </S.App>
  );
}
