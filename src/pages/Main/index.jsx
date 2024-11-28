import HashtagHeader from "./components/HashtagHeader";
import NewsSection from "./components/NewsSection";
import * as S from "./Mainpage.style";

export default function Main() {

  return (
    <S.App>
      <S.Container>
        <HashtagHeader />
        <NewsSection />
      </S.Container>
    </S.App>

  );
}
