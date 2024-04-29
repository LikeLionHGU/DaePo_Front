import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SlMagnifier } from "react-icons/sl";

const Horizontal = styled.div`
  //가로 정렬
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Logo = styled.p`
  font-size: 50px;
  font-weight: 800;
  margin-right: 50px;
  cursor: pointer;
`;

const SearchSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 700px;
  height: 50px;
  border-radius: 50px;
  border: solid 1px;
`;

const SearchInput = styled.input`
  width: 85%;
  height: 90%;
  border: none;
  outline: none;
`;

const SlMagnifierBT = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const LoginBT = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: 50px;
`;

function HeaderComponent() {
  const navigate = useNavigate();
  const onClickHUP = () => {
    navigate("/DaePo");
  };
  const onClickLogin = () => {
    // ToDo: 로그인 연결
  };
  return (
    <Horizontal>
      <Logo onClick={onClickHUP}> HUP </Logo>
      <SearchSpace>
        <SearchInput placeholder="작품명, 학생 이름, 키워드로 검색" />
        <SlMagnifierBT>
          <SlMagnifier style={{ width: "30px" }} />
        </SlMagnifierBT>
      </SearchSpace>
      <LoginBT onClick={onClickLogin}> 로그인 / 회원가입 </LoginBT>
    </Horizontal>
  );
}

export default HeaderComponent;
