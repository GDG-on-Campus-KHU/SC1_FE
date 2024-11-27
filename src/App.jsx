import { Route, Routes } from "react-router-dom";
import NewsDetailPage from './pages/NewsDetailPage'
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<NewsDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
