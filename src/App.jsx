import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoDetail from "./pages/VideoDetail";
import Feed from "./pages/Feed";
import SearchResult from "./pages/SearchResult";
import Header from "./components/Header";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/detail" element={<VideoDetail />} />
        <Route path="/results" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
