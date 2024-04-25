import MyPortfolioComponent from "./MyPortfolioComponent/MyPortfolioComponent";
import LikedPortfolioComponent from "./LikedPortfolioComponent/LikedPortfolioComponent";
import EditInfoComponent from "./EditInfoComponent/EditInfoComponent";

function MyPageComponent() {
  return (
    <>
      <MyPortfolioComponent />
      <EditInfoComponent />
      <LikedPortfolioComponent />
    </>
  );
}

export default MyPageComponent;
