import { Route, Routes } from "react-router-dom";
import NewsDetailPage from './pages/NewsDetailPage'
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Splash from "./pages/Splash";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<NewsDetailPage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/splash" element={<Splash />} />
      </Routes>
    </>
  );
}

export default App;
