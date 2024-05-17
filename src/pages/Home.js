import FooterComponent from "../component/Home/FooterComponent";
import HeaderComponent from "../component/Home/HeaderComponent";
import DivisionComponent from "../component/Home/DivisionComponent";
import HomePageComponent from "../component/Home/HomePageComponent";
import ContentComponent from "../component/Home/ContentsComponent";

function Home() {
  return (
    <div>
      <HeaderComponent />
      <DivisionComponent />
      <HomePageComponent />
      <ContentComponent />
      {/* <FooterComponent /> */}
    </div>
  );
}

export default Home;
