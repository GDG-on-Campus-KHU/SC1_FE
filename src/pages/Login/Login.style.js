import styled from "styled-components";
import google from "./assets/google.svg";
import theme from "../../styles/theme";

export const App = styled.div`
  width: 100%;
  height: 100dvh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 90dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 20%;
    object-fit: cover;
    margin-top: 5dvh;
  }

  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;

    text-align: center;

    margin: 0.5dvh 0;
  }

  h1 {
    margin: 2dvh 0 9dvh 0;
    font-size: 35px;
    color: ${theme.colors.primary[200]};
  }
`;

export const LoginButton = styled.button`
  width: 50%;
  height: 6dvh;
  min-height: 50px;

  border: none;

  background-image: url(${google});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;

  cursor: pointer;
  &:active {
    opacity: 0.8;
  }
`;
