import { useNavigate, NavLink } from "react-router-dom";
import AdminComponent from "../component/AdminPage/AdminComponent";
import FooterComponent from "../component/Home/FooterComponent";
import HeaderComponent from "../component/Home/HeaderComponent";
import DivisionComponent from "../component/Home/DivisionComponent";
import { useSetRecoilState } from "recoil";
import { UserInfoState } from "../store/atoms";
import { FaSignOutAlt } from "react-icons/fa";
import styled from "styled-components";
import {
  Container,
  Box,
  NoCenterHorizontal,
  Horizontal,
} from "../styles/StyledComponents";
import logo from "../img/Group 58.png";

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #ee7b00;
  font-size: 18px;
  margin-right: 40px;
  transition: font-weight 0.3s; /* 글자 두껍게 전환 효과를 위한 transition 추가 */

  &:hover {
    font-weight: bold; /* 호버 상태일 때 글자를 두껍게 설정 */
  }

  &.${(props) => props.activeClassName} {
    font-weight: bold;
  }
`;

const Logo = styled.img.attrs({
  src: logo,
  alt: "logo",
})`
  width: 70px;
  height: 40px;
  margin-left: 100px;
  margin-top: 50px;
  cursor: pointer;
`;

function AdminPage() {
  const navigate = useNavigate();
  const onClickHUP = () => {
    navigate("/DaePo");
  };
  const setUserInfo = useSetRecoilState(UserInfoState);

  const handleLogout = () => {
    // 실제 로그아웃 로직을 여기에 추가하세요
    setUserInfo({ isLoggedIn: false }); // 로그아웃 상태 업데이트
  };
  return (
    <>
      <Horizontal>
        <Logo src={logo} alt="logo" onClick={onClickHUP} />
        <NoCenterHorizontal
          style={{
            justifyContent: "flex-end",
            marginRight: "102px",
            marginTop: "36px",
          }}
        >
          <StyledNavLink to="/DaePo/PortFolio" activeClassName="active">
            프로젝트
          </StyledNavLink>
          <StyledNavLink to="/DaePo/CreatePost" activeClassName="active">
            업로드
          </StyledNavLink>
          <StyledNavLink to="/DaePo/MyPage" activeClassName="active">
            마이페이지
          </StyledNavLink>
          <StyledNavLink to="/DaePo/Admin" activeClassName="active">
            게시물 관리
          </StyledNavLink>
          <StyledNavLink to="/DaePo" onClick={handleLogout}>
            <FaSignOutAlt />
          </StyledNavLink>
        </NoCenterHorizontal>
      </Horizontal>
      <Box margin="50px" />
      <AdminComponent />
      <FooterComponent />
    </>
  );
}

export default AdminPage;
