import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.scss";
import Homepage from "@pages/Homepage";
import Search from "@pages/Search";
import History from "@pages/History";
import Jobs from "@pages/Jobs";
import LightThemeContext from "@contexts/LightTheme.jsx";

function App() {
  const [lightTheme, setLightTheme] = useState();
  const [ageCheck, setAgeCheck] = useState(false);

  const handleAgeCheck = () => {
    if (!ageCheck) {
      localStorage.setItem("ageCheck", "true");
      setAgeCheck(true);
    } else if (ageCheck) {
      localStorage.setItem("ageCheck", "false");
      setAgeCheck(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("lightTheme") === "true") {
      setLightTheme(true);
    } else if (localStorage.getItem("lightTheme") === "false") {
      setLightTheme(false);
    }

    if (localStorage.getItem("ageCheck") === "true") {
      setAgeCheck(true);
    } else if (localStorage.getItem("ageCheck") === "false") {
      setAgeCheck(false);
    } else if (localStorage.getItem("ageCheck") === null) {
      localStorage.setItem("ageCheck", "false");
      setAgeCheck(false);
    }
  }, []);

  return (
    <LightThemeContext.Provider value={{ lightTheme, setLightTheme }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                ageCheck={ageCheck}
                setAgeCheck={setAgeCheck}
                handleAgeCheck={handleAgeCheck}
              />
            }
          />
          <Route
            path="/search"
            element={
              <Search
                ageCheck={ageCheck}
                setAgeCheck={setAgeCheck}
                handleAgeCheck={handleAgeCheck}
              />
            }
          />
          <Route
            path="/history"
            element={
              <History
                ageCheck={ageCheck}
                setAgeCheck={setAgeCheck}
                handleAgeCheck={handleAgeCheck}
              />
            }
          />
          <Route
            path="/jobs"
            element={
              <Jobs
                ageCheck={ageCheck}
                setAgeCheck={setAgeCheck}
                handleAgeCheck={handleAgeCheck}
              />
            }
          />
          <Route
            path="*"
            element={
              <Homepage
                ageCheck={ageCheck}
                setAgeCheck={setAgeCheck}
                handleAgeCheck={handleAgeCheck}
              />
            }
          />
        </Routes>
      </Router>
    </LightThemeContext.Provider>
  );
}

export default App;
