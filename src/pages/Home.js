import FooterComponent from "../component/Home/FooterComponent";
import HeaderComponent from "../component/Home/HeaderComponent";
import DivisionComponent from "../component/Home/DivisionComponent";
import HomePageComponent from "../component/Home/HomePageComponent";
import ContentComponent from "../component/Home/ContentsComponent";
import VideoComponent from "../component/Home/VideoComponent";
import MapComponent from "../component/Home/MapComponent";

import { Container } from "../styles/StyledComponents";

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
