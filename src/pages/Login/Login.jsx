import "./Login.css";
import WrapperComponent from "../../components/register/WrapperComponent";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <WrapperComponent>
      <Link to={"/"}>
        <img className="backarrow" src="backarrow.png" alt="backarrow" />
      </Link>
      <div className="login-div">
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="**********" />
          </div>
          <button className="register-btn">Log In</button>
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
