import React from "react";
import styled from "styled-components";
import logo from "./../../img/Group 70.png";

const FooterContainer = styled.div`
  background-color: #ee7b00;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
  transform: translateY(0%);
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

const FooterComponent = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="logo" />
    </FooterContainer>
  );
};

export default FooterComponent;
