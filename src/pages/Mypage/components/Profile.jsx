import * as S from "../Mypage.style";

const Profile = ({ name, comment }) => {
  return (
    <S.Profile>
      <h3>{name}님</h3>
      {/* <h3>{userName}님</h3> */}
      <p>{comment}</p>
    </S.Profile>
  );
};

export default Profile;
