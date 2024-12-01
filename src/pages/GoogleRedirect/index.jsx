import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GoogleRedirect() {
  const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;

  const code = new URL(window.location.href).searchParams.get("code");

  const navigate = useNavigate();

  function generateState() {
    // 16바이트의 랜덤 값을 생성하고 이를 16진수 문자열로 변환
    return Array.from(window.crypto.getRandomValues(new Uint8Array(16)))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  const getGoogleLogin = async () => {
    const state = generateState();

    console.log("client state: ", state);
    console.log("client code: ", code);
    try {
      const res = await axios.get(
        `${SERVER_URL}/auth/callback?state=${state}&code=${code}`
      );
      console.log(res);

      const accessToken = res.data.access_token;
      const userName = res.data.user_info.name;
      const userId = res.data.user_info.id;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userName", userName);
      localStorage.setItem("userId", userId);

      navigate("/main");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getGoogleLogin();
  }, []);

  return <div>loading…</div>;
}
