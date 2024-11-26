import * as S from "./header.style";
import BackIcon from "./assets/BackIcon.svg";

export default function BackHeader() {
  return (
    <S.Container isBack={true}>
      <img src={BackIcon} alt="이전" />
    </S.Container>
  );
}
