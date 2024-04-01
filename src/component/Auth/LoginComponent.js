import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { UserInfoState } from "../../store/atoms";

const LoginButton = styled.button`
  width: 200px;
`;

function LoginComponent() {
  //ToDo: 로그인 시 정보 recoil 처리
  const setUserInfo = useSetRecoilState(UserInfoState);
  return (
    <>
      <LoginButton>로그인</LoginButton>
    </>
  );
}

export default LoginComponent;
