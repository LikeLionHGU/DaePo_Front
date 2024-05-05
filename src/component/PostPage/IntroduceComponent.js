import { Link } from "react-router-dom";
import styled from "styled-components";
import duck1 from "../../img/duck1.png";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  background-color: yellow;
  width: 800px;
  height: 250px;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 100px;
  cursor: pointer;
`;

const TextContainer = styled.div`
  margin-left: 20px;
`;

function IntroduceComponent() {
  return (
    <>
      <p>제작자 프로필</p>
      <Wrapper>
        <Link to="/DaePo/Profile/:id">
          <ProfileImage src={duck1} alt="Profile Image" />
        </Link>
        <TextContainer>
          <p>이름: 이한나</p>
          <hr />
          <p>자기소개: 이한나입ㄴ디ㅏ </p>
          <p>전공: AI 심화, 웹 개발 </p>
          <p>연락 이메일: 22100595@handong.ac.kr</p>
          <button>커피챗 신청하기</button>
        </TextContainer>
      </Wrapper>
    </>
  );
}

export default IntroduceComponent;
