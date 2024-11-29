import * as S from "./footer.style";
import news_activate from "./assets/news_activate.svg";
import news_deactivate from "./assets/news_deactivate.svg";
import my_activate from "./assets/my_activate.svg";
import my_deactivate from "./assets/my_deactivate.svg";
import { useNavigate } from "react-router-dom";

export default function Footer({ isNews, isMypage }) {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Element onClick={() => navigate("/main")} isMypage={isNews}>
        {isNews ? <img src={news_activate} /> : <img src={news_deactivate} />}
        <p>뉴스</p>
      </S.Element>
      <S.Element onClick={() => navigate("/mypage")} isMypage={isMypage}>
        {isMypage ? <img src={my_activate} /> : <img src={my_deactivate} />}
        <p>마이</p>
      </S.Element>
    </S.Container>
  );
}
