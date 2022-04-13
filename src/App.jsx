import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Homepage from "@pages/Homepage";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<Homepage />} />
        <Route path="/history" element={<Homepage />} />
        <Route path="/jobs" element={<Homepage />} />
        <Route path="*" element={<Homepage />} />
      </Routes>

      <div className="App"></div>
    </Router>
  );
}

export default App;
