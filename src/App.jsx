import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import NewsDetailPage from './pages/NewsDetailPage'

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
