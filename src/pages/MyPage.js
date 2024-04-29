import MyPortfolioComponent from "../component/Home/MyPortfolioComponent/MyPortfolioComponent";
import LikedPortfolioComponent from "../component/Home/LikedPortfolioComponent/LikedPortfolioComponent";
import EditInfoComponent from "../component/Home/EditInfoComponent/EditInfoComponent";

function MyPage() {
  return (
    <>
      <MyPortfolioComponent />
      <EditInfoComponent />
      <LikedPortfolioComponent />
    </>
  );
}

export default MyPage;
