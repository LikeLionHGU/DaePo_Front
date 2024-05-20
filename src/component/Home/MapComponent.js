import styled from "styled-components";
import { Link } from "react-router-dom";
import map from "./../../img/Group 39.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLinks = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const LinkItems = styled.div`
  color: #ee7b00;
  display: flex;
  align-items: center;
  margin-right: 100px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  margin-left: 30px;
`;

const Map = styled.img.attrs({
  src: map,
  alt: "map",
})`
  width: 1300px;
  height: 680px;
  margin-bottom: 180px;
`;

function MapComponent() {
  return (
    <Container>
      <FooterLinks>
        <LinkWrapper>
          <LinkItems>
            <h2>SNS</h2>
            <StyledLink to="/">@_DKJFLD</StyledLink>
          </LinkItems>
          <LinkItems>
            <h2>WEBSITE</h2>
            <StyledLink to="/">WWW.DFDFSDFSS.KR</StyledLink>
          </LinkItems>
        </LinkWrapper>
      </FooterLinks>
      <Map />
    </Container>
  );
}

export default MapComponent;
