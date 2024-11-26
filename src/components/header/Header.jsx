import * as S from "./header.style";

export default function Header({ page }) {
  return (
    <S.Container isBack={false}>
      <h1>{page}</h1>
    </S.Container>
  );
}
