import FooterComponent from "../component/Home/FooterComponent";
import HeaderComponent from "../component/Home/HeaderComponent";
import DivisionComponent from "../component/Home/DivisionComponent";
import MyPageComponent from "../component/Home/MyPageComponent";

function MyPage() {
  return (
    <div>
      <HeaderComponent />
      <DivisionComponent />
      <MyPageComponent />
      <FooterComponent />
    </div>
  );
}

export default MyPage;
