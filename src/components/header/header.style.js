import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  height: 7dvh;

  background-color: white;

  display: flex;
  justify-content: ${(props) => (props.isBack ? "flex-start" : "center")};
  align-items: center;

  padding-left: ${(props) => props.isBack && "10%"};
  position: fixed;
  top: 0;

  box-shadow: 0px 4px 8px #e9e9e9;
  h1 {
    font-size: 24px;
    font-style: bold;
  }
`;
