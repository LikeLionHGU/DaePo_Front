import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: orange;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubscriptionSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 10px;
  color: white;
`;

const FooterLinks = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
`;

const LinkWrapper = styled.div`
  display: flex;
`;

const LinkItems = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
`;

const SocialMediaSection = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const FooterComponent = () => {
  return (
    <FooterContainer>
      <SubscriptionSection>
        <p className="footer-subscription-heading">
          This is the university portfolio site.
        </p>
        <p className="footer-subscription-text">
          We want your portfolio to shine through this site.
        </p>
      </SubscriptionSection>
      <FooterLinks>
        <LinkWrapper>
          <LinkItems>
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Terms of Service</Link>
          </LinkItems>
          <LinkItems>
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
          </LinkItems>
        </LinkWrapper>
        <LinkWrapper>
          <LinkItems>
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
          </LinkItems>
        </LinkWrapper>
      </FooterLinks>
      <SocialMediaSection>
        <SocialMediaWrap>
          <SocialIcons>
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMediaSection>
    </FooterContainer>
  );
};

export default FooterComponent;
