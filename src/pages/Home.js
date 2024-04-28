import CardComponent from "../component/Home/CardComponent";

import AddPostButtonComponent from "../component/Home/AddPostButtonComponent";
import CarouselComponent from "../component/Home/CarouselComponent";
import FooterComponent from "../component/Home/FooterComponent";

function Home() {
  return (
    <div>
      Home
      <CardComponent />
      <AddPostButtonComponent />
      <CarouselComponent />
      <FooterComponent />
    </div>
  );
}

export default Home;
