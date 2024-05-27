import { Link } from "react-router-dom";
import styled from "styled-components";
import duck1 from "../../img/duck1.png";

import {
  NoCenterVertical,
  NoCenterHorizontal,
} from "../../styles/StyledComponents";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;
  height: 250px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 30px;
  margin-right: 100px;
  cursor: pointer;
`;

const TextContainer = styled.div`
  margin-left: 20px;
`;

const PostDescription = styled.textarea`
  width: 485px;
  height: 230px;
`;

const Text = styled.p`
  margin-top: 50px;
  font-size: 28px;
  font-family: "AUTHENTICSans130";
`;

function IntroduceComponent() {
  return (
    <>
      <Wrapper>
        <NoCenterVertical>
          <NoCenterHorizontal>
            <Link to="/DaePo/Profile/:id">
              <ProfileImage src={duck1} alt="Profile Image" />
            </Link>
            <TextContainer>
              <Text> 이한나 </Text>
              <Text> 작품명 </Text>
              {/* <p>연락 이메일: 22100595@handong.ac.kr</p>
          <button>커피챗 신청하기</button> */}
            </TextContainer>
          </NoCenterHorizontal>
          <Text>#태그 #태그2 #태그3</Text>
        </NoCenterVertical>
        <PostDescription>작품 설명</PostDescription>
      </Wrapper>
    </>
  );
}

export default IntroduceComponent;
