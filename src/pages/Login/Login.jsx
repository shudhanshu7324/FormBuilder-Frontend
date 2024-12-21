import "./Login.css";
import WrapperComponent from "../../components/register/WrapperComponent";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../../services";

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Enter email and password");
      return;
    }

    try {
      const response = await login(formData);
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
      <Link to={"/"}>
        <img className="backarrow" src="backarrow.png" alt="backarrow" />
      </Link>
      <div className="login-div">
        <form onSubmit={handleLogin}>
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
          <button type="submit" className="register-btn">
            Log In
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
          className="register-btn"
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
          Sign In with Google
        </button>
        <p className="capt">
          Don't have an account?{" "}
          <Link
            style={{ color: "#1A5FFF", textDecoration: "none" }}
            to={"/signup"}
          >
            Register Now
          </Link>
        </p>
      </div>
    </WrapperComponent>
  );
};

export default Login;
