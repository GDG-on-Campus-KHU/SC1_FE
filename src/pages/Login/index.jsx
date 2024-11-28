import * as S from "./Login.style";
import logo from "../../assets/logo.svg";
export default function Login() {
  return (
    <S.App>
      <S.Container>
        <p>실시간 재난 뉴스를 빠르고 간결하게!</p>
        <p>중요한 순간, 정확한 정보로 안전을 지켜드려요.</p>
        <img src={logo} alt="logo" />
        <h1>재난노티</h1>
        <S.LoginButton></S.LoginButton>
      </S.Container>
    </S.App>
  );
}
