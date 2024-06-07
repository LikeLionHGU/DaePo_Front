import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import logo from "../../img/Group 58.png";
import { themeColors } from "../../styles/StyledComponents";

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
  cursor: pointer;
`;

const LogoContainer = styled.div`
  margin-right: 20px;
  margin-top: 20px;
  margin-left: 100px;
  margin-right: 30px;
`;

const SearchSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  max-width: 40%;
  height: 50px;
  border-radius: 50px;
  border: solid 2px ${themeColors.MAINCOLOR.color};
`;

const SearchInput = styled.input`
  flex: 1;
  width: 100%;
  margin-left: 10px;
  border: none;
  outline: none;
`;

const SlMagnifierBT = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${themeColors.MAINCOLOR.color};
  margin-right: 5px;
`;

function HeaderComponent() {
  const navigate = useNavigate();
  const onClickHUP = () => {
    navigate("/DaePo");
  };
  // const onClickLogin = () => {
  //   // ToDo: 로그인 연결
  // };
  return (
    <Horizontal>
      <LogoContainer onClick={onClickHUP}>
        <Logo src={logo} alt="logo" />
      </LogoContainer>
      <SearchSpace>
        <SearchInput placeholder="작품명, 학생 이름, 키워드로 검색" />
        <SlMagnifierBT>
          <IoSearchSharp style={{ width: "25px" }} size="1x" />
        </SlMagnifierBT>
      </SearchSpace>
      {/* <LoginBT onClick={onClickLogin}> 로그인 / 회원가입 </LoginBT> */}
    </Horizontal>
  );
}

export default HeaderComponent;
