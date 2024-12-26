import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import FormPage from "./pages/FormPage/FormPage.jsx";
import Setting from "./pages/Setting/Setting.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }

    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true); // Set to true if token exists
    }
  }, []);

 

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <Routes>
          <Route
              path="/"
              element={isAuthenticated ? <Navigate to="/formpage" /> : <LandingPage />}
            />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/formpage"
              element={
                <ProtectedRoute>
                  <FormPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/setting"
              element={
                <ProtectedRoute>
                  <Setting />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
export { ThemeContext };
