import React, { useState } from "react";
import "./Setting.css";

const Setting = () => {
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);

  return (
    <div className="container">
      <h1 className="title">Settings</h1>
      <form className="form">
        {/* Name Field */}
        <input className="input" type="text" placeholder="Name" />

        {/* Update Email Field */}
        <div className="password-container">
          <input
            className="password-input"
            type={isEmailVisible ? "text" : "password"}
            placeholder="Update Email"
          />
          <span
            className="eye-icon"
            onClick={() => setIsEmailVisible(!isEmailVisible)}
          >
            {isEmailVisible ? "🙈" : "👁️"}
          </span>
        </div>

        {/* Old Password Field */}
        <div className="password-container">
          <input
            className="password-input"
            type={isOldPasswordVisible ? "text" : "password"}
            placeholder="Old Password"
          />
          <span
            className="eye-icon"
            onClick={() => setIsOldPasswordVisible(!isOldPasswordVisible)}
          >
            {isOldPasswordVisible ? "🙈" : "👁️"}
          </span>
        </div>

        {/* New Password Field */}
        <div className="password-container">
          <input
            className="password-input"
            type={isNewPasswordVisible ? "text" : "password"}
            placeholder="New Password"
          />
          <span
            className="eye-icon"
            onClick={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
          >
            {isNewPasswordVisible ? "🙈" : "👁️"}
          </span>
        </div>

        {/* Update Button */}
        <button className="update-button" type="button">
          Update
        </button>
      </form>

      {/* Logout Button */}
      <button className="logout-button" type="button">
        Log out
      </button>
    </div>
  );
};

export default Setting;
