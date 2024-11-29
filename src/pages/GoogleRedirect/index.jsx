import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GoogleRedirect() {
  const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;

  const state = new URL(window.location.href).searchParams.get("state");
  const code = new URL(window.location.href).searchParams.get("code");

  const navigate = useNavigate();

  const getGoogleLogin = async (state, code) => {
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
    if (code) {
      getGoogleLogin(state, code);
    }
  }, []);

  return <div>loading...</div>;
}
