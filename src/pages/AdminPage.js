import AdminComponent from "../component/AdminPage/AdminComponent";
import FooterComponent from "../component/Home/FooterComponent";
import HeaderComponent from "../component/Home/HeaderComponent";
import DivisionComponent from "../component/Home/DivisionComponent";
import {
  Container,
  Vertical,
  Box,
  WrapContainer,
} from "../styles/StyledComponents";

function AdminPage() {
  return (
    <>
      <Container>
        <HeaderComponent />
        <DivisionComponent />
      </Container>
      <Box margin="50px" />
      <AdminComponent />
      <FooterComponent />
    </>
  );
}

export default AdminPage;
