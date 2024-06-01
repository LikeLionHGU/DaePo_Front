import { Link } from "react-router-dom";
import styled from "styled-components";
import duck1 from "../../img/duck1.png";
import emailimg from "../../img/email.png";
import coffechatimg from "../../img/coffechat.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-top: 3px solid black;
  width: 60%;
`;

const TopSection = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 10px;
  background-color: #e0e0e0;
  margin-left: -20px;
`;

const TextContainer = styled.div`
  flex-grow: 1;
  margin-left: 20px;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: bold;
`;

const Designer = styled.h2`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: bold;
`;

const Contact = styled.h2`
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Explain = styled.h2`
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Adress = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Email = styled.a`
  margin-left: 15px;
  margin-bottom: 0px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  font-size: 15px;
`;

const Behance = styled.a`
  margin-top: 0px;
  margin-left: 83px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  font-size: 15px;
`;

const RightSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 30px;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
  margin-left: -500px;
`;

const PostDescription = styled.div`
  font-size: 14px;
  line-height: 1.5;
  border: 3px solid black;
  border-radius: 10px;
  padding: 10px;
  width: 440px;
  height: 240px;
  position: absolute;
  left: 470px;
`;

const Tags = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 22px;
  width: 100%;
`;

const Tag = styled.span`
  margin-right: 30px;
  font-weight: bold;
`;

function IntroduceComponent() {
  return (
    <Wrapper>
      <TopSection>
        <ProfileImage src={duck1} alt="Profile Image" />
        <TextContainer>
          <Title>제목</Title>
          <Designer>디자이너</Designer>

          <Adress>
            <ContactRow>
              <Contact>Contact</Contact>
              <Email href="mailto:22200000@gmail.com">
                <img
                  src={emailimg}
                  alt="Email Icon"
                  style={{ width: "20px", height: "20px", marginRight: "5px" }}
                />
                22200000@gmail.com
              </Email>
            </ContactRow>
            <Behance href="http://www.behance.net" target="_blank">
              <img
                src={coffechatimg}
                alt="Behance Icon"
                style={{ width: "18px", height: "18px", marginRight: "5px" }}
              />
              www.behance.net
            </Behance>
          </Adress>
        </TextContainer>
        <PostDescription>
          <Explain>작품 설명</Explain>이 작품은 가상현실과 현실세계의 모호함을
          나타냈으며 그 사이의 괴리감을 풀어내기 위한 어쩌구 저쩌구로서 너무
          줄리네요. 다음 확인할 때 늦지 않게 디자인 바꿔서 정말 정말 죄송합니다.
          프론트엔드 너무 잘하세요. 어쩌구 그렇게 다들 예쁜말만 해주시느지 이번
          학기에도 화이팅하고 행복하세요.. 다들 학기 마무리 잘하시길 기도할게용
        </PostDescription>
      </TopSection>
      <RightSection>
        <Tags>
          <Tag># 서비스 디자인</Tag>
          <Tag># Figma</Tag>
          <Tag># illustrator</Tag>
        </Tags>
      </RightSection>
    </Wrapper>
  );
}

export default IntroduceComponent;
