import MyPortfolioComponent from "./MyPortfolioComponent/MyPortfolioComponent";
import LikedPortfolioComponent from "./LikedPortfolioComponent/LikedPortfolioComponent";
import { Vertical, Box } from "../../styles/StyledComponents";
function MyPageComponent({ myPortfoilo, myLiked }) {
  console.log("myLiked", myLiked);
  return (
    <Vertical>
      <MyPortfolioComponent myPortfoilo={myPortfoilo} />
      <Box margin="50px" />
      <LikedPortfolioComponent myLiked={myLiked} />
    </Vertical>
  );
}

export default MyPageComponent;
