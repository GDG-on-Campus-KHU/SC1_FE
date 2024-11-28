import Footer from "../../components/footer";
import Header from "../../components/header/Header";
import HashtagHeader from "./components/HashtagHeader";
import NewsSection from "./components/NewsSection";
import * as S from "./Mainpage.style";

export default function Main() {
  return (
    <S.App>
      <Header page="뉴스" />
      <S.Container>
        <HashtagHeader />
        <NewsSection />
      </S.Container>
      <Footer isNews={true} />
    </S.App>
  );
}
