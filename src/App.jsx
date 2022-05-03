import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.scss";
import AbusAlcool from "@components/AbusAlcool";
import Homepage from "@pages/Homepage";
import Search from "@pages/Search";
import History from "@pages/History";
import Jobs from "@pages/Jobs";
import LightThemeContext from "@contexts/LightTheme.jsx";

function App() {
  const [lightTheme, setLightTheme] = useState();

  return (
    <LightThemeContext.Provider value={{ lightTheme, setLightTheme }}>
      <Router>
        <Routes>
          <Route path="/" element={<AbusAlcool />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/history" element={<History />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </Router>
    </LightThemeContext.Provider>
  );
}

export default App;
