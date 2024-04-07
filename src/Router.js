import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/DaePo" element={<Home />} />
        <Route path="/DaePo/MyPage" element={<MyPage />} />
        <Route path="/DaePo/CreatePost" element={<CreatePost />} />
        <Route path="/DaePo/PostPage" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}
