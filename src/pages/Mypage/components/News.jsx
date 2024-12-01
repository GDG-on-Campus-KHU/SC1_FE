import { useNavigate } from "react-router-dom";
import NewsComponent from "../../../components/NewsComponent";
import * as S from "../Mypage.style";

const News = ({ news }) => {
  const navigate = useNavigate();
  return (
    <S.NewsContainer id="news">
      <h1>저장한 뉴스</h1>
      <S.News>
        {news.map((value) => {
          return (
            <>
              <NewsComponent
                key={value.article_id}
                title={value.title}
                tag={value.keywords[0]}
                keywords={value.keywords}
                onClick={() => navigate(`/detail/${value.article_id}`)}
                image_url={value.image_url}
              />
            </>
          );
        })}
      </S.News>
    </S.NewsContainer>
  );
};

export default News;
