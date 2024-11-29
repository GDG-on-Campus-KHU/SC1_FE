import * as S from "./Login.style";
import logo from "../../assets/logo.svg";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const G_CLIENT_ID = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID;
  const G_REDIRECT_URI = import.meta.env.VITE_APP_GOOGLE_REDIRECT_URL;
  const googleURL = `https://accounts.google.com/o/oauth2/auth?client_id=${G_CLIENT_ID}&redirect_uri=${G_REDIRECT_URI}&response_type=code`;
  const navigate = useNavigate();

  /* 라이브러리 사용 */
  // const handleGoogleLogin = useGoogleLogin({
  //   clientId: G_CLIENT_ID,
  //   onSuccess: (res) => {
  //     console.log(res);

  //     localStorage.setItem("accessToken", res.access_token);
  //     localStorage.setItem("userName", res.data.user_info.name);
  //     localStorage.setItem("userId", res.data.user_info.id);

  //     navigate("/");
  //     // 구글 로그인 성공 시 처리할 로직
  //   },
  //   onError: (err) => {
  //     console.log(err);
  //     // 구글 로그인 실패 시 처리할 로직
  //   },
  // });

  /* 라이브러리 미사용 */
  const handleGoogleLogin = () => {
    window.location.href = googleURL;
  };

  return (
    <S.App>
      <S.Container>
        <p>실시간 재난 뉴스를 빠르고 간결하게!</p>
        <p>중요한 순간, 정확한 정보로 안전을 지켜드려요.</p>
        <img src={logo} alt="logo" />
        <h1>재난노티</h1>
        <S.LoginButton onClick={handleGoogleLogin}></S.LoginButton>
      </S.Container>
    </S.App>
  );
}
