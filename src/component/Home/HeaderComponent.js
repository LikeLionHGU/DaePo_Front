import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import logo from "../../img/Group 58.png";

const Horizontal = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const Logo = styled.img.attrs({
  src: logo,
  alt: "logo",
})`
  width: 70px;
  height: 40px;
  margin-left: 100px;
  margin-right: 30px;
`;

const LoginBT = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: 50px;
`;

const LogoContainer = styled.div`
  margin-right: 20px;
`;
const SearchSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 400px;
  height: 50px;
  border-radius: 50px;
  border: solid 2px #ee7b00;
`;

const SearchInput = styled.input`
  width: 90%;
  height: 90%;
  border: none;
  outline: none;
`;

const SlMagnifierBT = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #ee7b00;
  margin-right: 5px;
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
      <LogoContainer onClick={onClickHUP}>
        <Logo src={logo} alt="logo" />
      </LogoContainer>
      <SearchSpace>
        <SearchInput placeholder="작품명, 학생 이름, 키워드로 검색" />
        <SearchInput />
        <SlMagnifierBT>
          <IoSearchSharp style={{ width: "25px" }} size="1x" />
        </SlMagnifierBT>
      </SearchSpace>
      {/* <LoginBT onClick={onClickLogin}> 로그인 / 회원가입 </LoginBT> */}
    </Horizontal>
  );
}

export default HeaderComponent;
