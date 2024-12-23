import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { ThemeContext } from "../../App";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setIsDarkMode(newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const handleLogout = () => {
    // Clear relevant keys from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("theme");
    localStorage.removeItem("isAuthenticated");

    // Redirect to the home page
    navigate("/");
  };

  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    setIsDarkMode(savedTheme === "dark");
  }, [setTheme]);

  return (
    <div
      className="navbar"
      style={{
        backgroundColor: theme === "light" ? "white" : "#18181B",
        color: theme === "light" ? "#18181B" : "white",
      }}
    >
      <div className="dropdown">
        <div
          className="dropdown-box"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={toggleDropdown}
        >
          Username
          <img
            style={{
              width: "12px",
              height: "7px",
              transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s",
            }}
            src="down.png"
            alt="down"
          />
        </div>

        {isDropdownOpen && (
          <>
            <div className="dropdown-box">
              <Link className="setting-link" to={"/setting"}>
                Settings
              </Link>
            </div>
            <div className="dropdown-box">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </>
        )}
      </div>
      <div className="toggle-theme" onClick={toggleTheme}>
        <span>Light</span>
        <div className="toggle-box">
          <div
            className="toggle-circle"
            style={{
              transform: isDarkMode ? "translateX(26px)" : "translateX(0)",
              transition: "transform 0.3s",
            }}
          ></div>
        </div>
        <span>Dark</span>
      </div>
      <button
        style={{ marginLeft: "8vw", cursor: "pointer", marginTop: "5px" }}
      >
        <img style={{ width: "86px" }} src="share.png" alt="share" />
      </button>
    </div>
  );
};

export default Navbar;
