import { Link } from "react-router-dom";
import './Signup.css'
import WrapperComponent from "../../components/register/WrapperComponent";

const Signup = () => {
  return (
    <WrapperComponent>
      <Link to={"/signin"}>
        <img className="backarrow" src="backarrow.png" alt="backarrow" />
      </Link>
      <div className="signup-div">
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Enter a username" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter your email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="**********" />
          </div>
          <div id="confirm-password">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" placeholder="**********" />
            <span style={{fontSize:"14px",color:"#522224",fontWeight:"500",marginTop:"-5px"}}>enter same password in both fields</span>
          </div>
          <button className="register-btn">Sign Up</button>
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
