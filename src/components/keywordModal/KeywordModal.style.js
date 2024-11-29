import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  // width: 60%;

  padding: 10px 3px;
  position: absolute;
  top: 95%;
  left: 8px;

  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2px;

  background: ${theme.colors.background[100]};
  border-radius: 8px;
  border: 1px ${theme.colors.accent[200]} solid;

  z-index: 100;
`;

export const Tag = styled.div`
  background-color: ${theme.colors.primary[100]};
  height: 100%;
  border-radius: 10px;
  padding: 4px 8px;
  text-align: center;
  display: inline-block;
  font-size: 9px;
  font-family: "Noto Sans KR";
  color: white;
`;
