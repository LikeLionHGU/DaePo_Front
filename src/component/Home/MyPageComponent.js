import MyPortfolioComponent from "./MyPortfolioComponent/MyPortfolioComponent";
import LikedPortfolioComponent from "./LikedPortfolioComponent/LikedPortfolioComponent";
import EditInfoComponent from "./EditInfoComponent/EditInfoComponent";

function MyPageComponent() {
  return (
    <>
      <EditInfoComponent />
      <hr />
      <MyPortfolioComponent />
      <hr />
      <LikedPortfolioComponent />
    </>
  );
}

export default MyPageComponent;
