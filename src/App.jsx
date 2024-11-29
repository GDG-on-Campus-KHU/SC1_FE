import { Route, Routes } from "react-router-dom";
import NewsDetailPage from "./pages/NewsDetailPage";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import GoogleRedirect from "./pages/GoogleRedirect";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<NewsDetailPage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth/callback" element={<GoogleRedirect />} />
      </Routes>
    </>
  );
}

export default App;
