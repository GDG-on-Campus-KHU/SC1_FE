import * as S from "./header.style";
import BackIcon from "./assets/BackIcon.svg";
import { useNavigate } from "react-router-dom";

export default function BackHeader() {
  const navigate = useNavigate();
  return (
    <S.Container isBack={true}>
      <img src={BackIcon} alt="이전" onClick={() => navigate(-1)} />
    </S.Container>
  );
}
