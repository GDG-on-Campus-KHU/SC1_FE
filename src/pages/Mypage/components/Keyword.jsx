import KeywordButton from "../../../components/KeywordButton";
import * as S from "../Mypage.style";

const Keyword = ({ keyword }) => {
  return (
    <S.KeywordContainer id="keyword">
      <h1>저장한 키워드</h1>
      <S.KeywordSlider>
        {keyword.map((value) => {
          return (
            <>
              <KeywordButton keyword={value} />
            </>
          );
        })}
      </S.KeywordSlider>
    </S.KeywordContainer>
  );
};

export default Keyword;
