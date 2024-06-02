import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import FooterComponent from "../component/Home/FooterComponent";
import MyPageComponent from "../component/Home/MyPageComponent";
import EditInfoComponent from "../component/Home/EditInfoComponent/EditInfoComponent";

import {
  Vertical,
  Horizontal,
  NoCenterHorizontal,
  Box,
} from "../styles/StyledComponents";
import logo from "../img/Group 58.png";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to left, #ff7d04, #ffebd9);
  width: 100%;
  height: 225px;
  margin-bottom: 550px;
  padding-top: 25px;
`;
const Logo = styled.img.attrs({
  src: logo,
  alt: "logo",
})`
  width: 70px;
  height: 40px;
  margin-left: 94px;
  margin-top: 25px;
`;

const ProfileImg = styled.img`
  width: 330px;
  height: 330px;
  border-radius: 50%;
  cursor: pointer;
  border: 10px solid white;
  margin-top: 100px;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: white;
  font-size: 20px;
  margin-right: 40px;
  font-family: "AUTHENTICSans90";
`;

const MyInfo = {
  name: "이한나",
  email: "22100595@handong.ac.kr",
  intro: "멋쟁이 아기사자 웹파트 이한나입니다.",
  image:
    "https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg",
  otherSite: "github link",
};

function MyPage() {
  const navigate = useNavigate();
  const onClickHUP = () => {
    navigate("/DaePo");
  };
  const [imageFile, setImageFile] = useState(MyInfo.image);
  const fileInputRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageFile(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  return (
    <Vertical>
      <Header>
        <Horizontal>
          <Logo src={logo} alt="logo" onClick={onClickHUP} />
          <NoCenterHorizontal
            style={{
              justifyContent: "flex-end",
              marginRight: "95px",
              marginTop: "10px",
            }}
          >
            <StyledLink to="/DaePo/PortFolio">프로젝트</StyledLink>
            <StyledLink to="/DaePo/CreatePost">업로드</StyledLink>
            <StyledLink to="/DaePo/MyPage" style={{ fontWeight: 700 }}>
              마이페이지
            </StyledLink>
            <StyledLink to="/DaePo/Admin">게시물 관리</StyledLink>
          </NoCenterHorizontal>
        </Horizontal>
        <Horizontal>
          <div style={{ display: "flex" }}>
            <ProfileImg
              src={imageFile}
              alt="프로필 이미지"
              onClick={handleImageClick}
            />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <EditInfoComponent MyInfo={MyInfo} />
          </div>
        </Horizontal>
      </Header>
      <MyPageComponent />
      <Box margin="100px" />
      <FooterComponent />
    </Vertical>
  );
}

export default MyPage;
