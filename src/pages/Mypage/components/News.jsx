import NewsComponent from "../../../components/NewsComponent";
import * as S from "../Mypage.style";

const News = ({ news }) => {
  return (
    <S.NewsContainer id="news">
      <h1>저장한 뉴스</h1>
      <S.News>
        {news.map((value, index) => {
          console.log(value);
          return (
            <>
              <NewsComponent
                key={index}
                // key={value.article_id}
                title={value.title}
                tag={value.keyword[0]}
                // tag={value.keywords[0]}
              />
            </>
          );
        })}
      </S.News>
    </S.NewsContainer>
  );
};

export default News;
