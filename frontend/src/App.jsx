import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Homepage from "@pages/Homepage";
import Search from "@pages/Search";
import History from "@pages/History";
import Jobs from "@pages/Jobs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/history" element={<History />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
