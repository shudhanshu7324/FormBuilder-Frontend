import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import WrapperComponent from "../../components/register/WrapperComponent";
import { useState } from "react";
import { register } from "../../services";

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("All fields are required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Password doesn't match");
      return;
    }

    try {
      const response = await register(formData);
      if (response.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("isAuthenticated",true)
        console.log(response.data.message);
        navigate('/formpage')
      } else {
        console.log(response.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <WrapperComponent>
      <Link to={"/signin"}>
        <img className="backarrow" src="backarrow.png" alt="backarrow" />
      </Link>
      <div className="signup-div">
        <form onSubmit={handleRegister}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter a username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="**********"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div id="confirm-password">
            <label
              htmlFor="password"
              style={{
                color:
                  formData.password &&
                  formData.confirmPassword &&
                  formData.password !== formData.confirmPassword
                    ? "#522224"
                    : "",
              }}
            >
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="**********"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              style={{
                borderColor:
                  formData.password &&
                  formData.confirmPassword &&
                  formData.password !== formData.confirmPassword
                    ? "#522224"
                    : "",
                borderWidth: "2px",
              }}
            />

            {formData.password &&
              formData.confirmPassword &&
              formData.password !== formData.confirmPassword && (
                <span
                  style={{
                    fontSize: "14px",
                    color: "#522224",
                    fontWeight: "500",
                    marginTop: "-5px",
                    display: "block",
                  }}
                >
                  Enter the same password in both fields
                </span>
              )}
          </div>
          <button className="register-btn button" type="submit">
            Sign Up
          </button>
        </form>
        <p className="or">OR</p>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
          className="register-btn button"
        >
          <div
            style={{
              backgroundColor: "white",
              height: "30px",
              width: "30px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              left: "10px",
            }}
          >
            <img style={{ width: "20px" }} src="google.png" alt="google" />
          </div>
          Sign Up with Google
        </button>
        <p className="capt">
          Already have an account?{" "}
          <Link
            style={{ color: "#1A5FFF", textDecoration: "none" }}
            to={"/signin"}
          >
            Login
          </Link>
        </p>
      </div>
    </WrapperComponent>
  );
};

export default Signup;
