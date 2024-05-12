import AdminComponent from "../component/AdminPage/AdminComponent";
import FooterComponent from "../component/Home/FooterComponent";
import HeaderComponent from "../component/Home/HeaderComponent";
import DivisionComponent from "../component/Home/DivisionComponent";

function AdminPage() {
  return (
    <div>
      <HeaderComponent />
      <DivisionComponent />
      <AdminComponent />
      <FooterComponent />
    </div>
  );
}

export default AdminPage;
