import styled from "styled-components";
import theme from "../../styles/theme";

export const App = styled.div`
  width: 100%;
  height: 84dvh;
  margin: 8dvh 0;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;

    color: black;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 84dvh;

  overflow-y: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // border: 1px lightgray solid;
`;

export const Profile = styled.div`
  width: 70%;
  height: 14dvh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 10%;
  gap: 20px;

  border-radius: 10px;
  background-color: ${theme.colors.primary[300]};
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.15);

  h3 {
    margin: 0;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 22px;
  }
  p {
    margin: 0;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Line = styled.section`
  width: 100%;
  height: 1%;
  margin: 4dvh 0;

  background: ${theme.colors.background[200]};
`;
