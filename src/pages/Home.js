import FooterComponent from "../component/Home/FooterComponent";
import HeaderComponent from "../component/Home/HeaderComponent";
import DivisionComponent from "../component/Home/DivisionComponent";
import HomePageComponent from "../component/Home/HomePageComponent";
import ContentComponent from "../component/Home/ContentsComponent";
import styled from "styled-components";
import VideoComponent from "../component/Home/VideoComponent";
import MapComponent from "../component/Home/MapComponent";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

function Home() {
  return (
    <div>
      <Container>
        <HeaderComponent />
        <DivisionComponent />
      </Container>
      <VideoComponent />
      <ContentComponent />
      <HomePageComponent />
      <MapComponent />
      <FooterComponent />
    </div>
  );
}

export default Home;
