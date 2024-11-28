import HashtagHeader from "./components/HashtagHeader";
import NewsSection from "./components/NewsSection";
import Header from "../../components/header/Header";
import Footer from "../../components/footer";
import * as S from "./Mainpage.style";

export default function Main() {

  return (
    <S.App>
      <Header/>
      <S.Container>
        <HashtagHeader />
        <NewsSection />
      </S.Container>
      <Footer/>
    </S.App>

  );
}
