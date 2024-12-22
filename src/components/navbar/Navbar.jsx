import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <div className="navbar">
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
              <Link className="setting-link" to={'/settings'}>
                Settings
              </Link>
            </div>
            <div className="dropdown-box">
              <button>Logout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
