import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/DaePo" element={<Home />} />
        <Route path="/DaePo/MyPage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
