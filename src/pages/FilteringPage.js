import FilteringComponent from "../component/FilteringPage/FilteringComponent";
import FooterComponent from "../component/Home/FooterComponent";
import HeaderComponent from "../component/Home/HeaderComponent";
import DivisionComponent from "../component/Home/DivisionComponent";

function FilteringPage() {
  return (
    <div>
      <HeaderComponent />
      <DivisionComponent />
      <FilteringComponent />
      <FooterComponent />
    </div>
  );
}

export default FilteringPage;
