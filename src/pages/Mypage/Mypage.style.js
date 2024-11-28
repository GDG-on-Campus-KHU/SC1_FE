import styled from "styled-components";
import theme from "../../styles/theme";

export const App = styled.div`
  width: 100%;
  height: 84dvh;
  margin: 8dvh 0;
  display: flex;
  justify-content: center;

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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // border: 1px lightgray solid;
`;

export const Profile = styled.div`
  // width: 90%;
  height: 14dvh;
  padding: 0 10dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

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
  height: 1dvh;
  margin: 3dvh 0 2dvh 0;
  background: ${theme.colors.background[200]};
`;

/* Keywords */
export const KeywordContainer = styled.div`
  width: 90%;
  align-items: center; /* 세로 중앙 정렬 */
`;

export const KeywordSlider = styled.div`
  display: flex;
  align-items: center;

  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* 스크롤 부드럽게 */
  scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE에서 스크롤바 숨기기 */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari에서 스크롤바 숨기기 */
  }
`;

/* News */
export const NewsContainer = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    width: 100%;
  }
`;

export const News = styled.div`
  width: 100%;
  height: 40dvh;
  display: grid;
  overflow-y: auto;
  padding: 0 2dvh 1dvh 2dvh;

  grid-template-columns: repeat(2, 1fr); /* 2열 */
  gap: 18px; /* 아이템 간 간격 */
`;
