import MyPortfolioComponent from "./MyPortfolioComponent/MyPortfolioComponent";
import LikedPortfolioComponent from "./LikedPortfolioComponent/LikedPortfolioComponent";
import { Vertical, Box } from "../../styles/StyledComponents";
function MyPageComponent() {
  return (
    <Vertical>
      <MyPortfolioComponent />
      <Box margin="50px" />
      <LikedPortfolioComponent />
    </Vertical>
  );
}

export default MyPageComponent;
