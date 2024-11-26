import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </>
  );
}

export default App;
