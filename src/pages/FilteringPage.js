import FilteringComponent from "../component/FilteringPage/FilteringComponent";
import FooterComponent from "../component/Home/FooterComponent";
import HeaderComponent from "../component/Home/HeaderComponent";
import DivisionComponent from "../component/Home/DivisionComponent";

import { Container } from "../styles/StyledComponents";

function FilteringPage() {
  return (
    <>
      <Container>
        <HeaderComponent />
        <DivisionComponent />
      </Container>
      <FilteringComponent />
      <FooterComponent />
    </>
  );
}

export default FilteringPage;
