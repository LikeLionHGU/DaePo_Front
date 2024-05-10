import FooterComponent from "../component/Home/FooterComponent";
import HeaderComponent from "../component/Home/HeaderComponent";
import CardComponent from "../component/ProfilePage/CardComponent";
import IntroduceComponent from "../component/ProfilePage/IntroduceComponent";
import styled from "styled-components";

const PoPolDataList = [
  {
    professor: "이재선 교수님",
    tools: "네모네모 빔 툴",
    year: "2020",
    field: "자동차 부품..?",
    title: "핸들..?",
    description: "핸들 디자인 이런거 있나 뭐 있으면 있겠지",
  },
  {
    professor: "콘디 교수님",
    tools: "다른 툴",
    year: "2021",
    field: "다른 분야..?",
    title: "밤양갱",
    description: "달고 달디 단 밤양개객애개액애갱개액액액액애갱갱ㄱㅇ",
  },
];

const Horizontal = styled.div`
  //가로 정렬
  display: flex;
  align-items: center;
  width: 100%;
`;

function ProfilePage() {
  return (
    <div>
      <HeaderComponent />
      <hr />
      <IntroduceComponent />
      <hr />
      <h2>업로드한 작품</h2>
      <Horizontal>
        {PoPolDataList.map((data, index) => (
          <CardComponent key={index} data={data} />
        ))}
      </Horizontal>
      <hr />
      <FooterComponent />
    </div>
  );
}

export default ProfilePage;
