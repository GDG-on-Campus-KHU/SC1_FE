import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 7dvh;

  background-color: white;

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  bottom: 0;

  box-shadow: 0px -4px 8px #e9e9e9;

  h1 {
    font-size: 24px;
    font-style: bold;
  }
`;

export const Element = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  img {
    width: 80%;
    object-fit: cover;
  }
  p {
    margin: 0;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 22px;

    color: ${(props) => (props.isMypage ? "black" : "#868686")};
  }
`;
