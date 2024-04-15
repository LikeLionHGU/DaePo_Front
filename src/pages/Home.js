import CardComponent from "../component/Home/CardComponent";

import AddPostButtonComponent from "../component/Home/AddPostButtonComponent";
import PopularPostComponent from "../component/Home/PopularPostComponent";

function Home() {
  return (
    <div>
      Home
      <CardComponent />
      <AddPostButtonComponent />
      <PopularPostComponent />
    </div>
  );
}

export default Home;
