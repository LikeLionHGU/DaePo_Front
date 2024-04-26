import MyPortfolioComponent from "./MyPortfolioComponent/MyPortfolioComponent";
import LikedPortfolioComponent from "./LikedPortfolioComponent/LikedPortfolioComponent";
import EditInfoComponent from "./EditInfoComponent/EditInfoComponent";

function MyPageComponent({ activeMenu, setActiveMenu }) {
  return (
    <>
      <EditInfoComponent />
      <hr />
      <MyPortfolioComponent
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <hr />
      <LikedPortfolioComponent />
    </>
  );
}

export default MyPageComponent;
