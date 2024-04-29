import AddPostButtonComponent from "./AddPostButtonComponent";
import PopularPostComponent from "./PopularPostComponent";
import CardComponent from "./CardComponent";

function HomePageComponent() {
  return (
    <>
      <CardComponent />
      <AddPostButtonComponent />
      <PopularPostComponent />
    </>
  );
}

export default HomePageComponent;
