import * as S from "./header.style";
import Logo from "../../assets/logo.svg";
import styled from "styled-components";

const LogoImg = styled.img`
  width: 40px;
`;

export default function Header({ page }) {
  return (
    <S.Container isBack={false}>
      {page === "메인페이지" ? (
        <LogoImg src={Logo} alt="Logo" />
      ) : (
        <h1>{page}</h1>
      )}
    </S.Container>
  );
}
