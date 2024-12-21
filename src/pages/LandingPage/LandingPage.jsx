import { Link } from "react-router-dom";
import FormBotLogo from "../../components/logos/FormBotLogo";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="header">
        <FormBotLogo />
        <div className="nav-link">
          <Link className="first-link" to="/signin">
            Sign in
          </Link>
          <Link className="second-link" to="/signin">
            Create a FormBot
          </Link>
        </div>
      </div>
      <div className="hero">
        <div className="hero-div1">
          <img src="triangle.png" alt="triangle" />
        </div>
        <div className="hero-content">
          <h1>Build advanced chatbots visually</h1>
          <p>
            Typebot gives you powerful blocks to create unique chat experiences.
            Embed them anywhere on your web/mobile apps and start collecting
            results like magic.
          </p>
          <Link className="link" to="/signin">
            Create a FormBot for free
          </Link>
        </div>
        <div className="hero-div2">
          <img src="semi.png" alt="semi" />
        </div>
      </div>
      <div className="figure">
        <div className="orange">
          <img src="orange.png" alt="orange" />
        </div>
        <div className="figure-img">
          <img src="Figure.png" alt="figure" />
        </div>
        <div className="blue">
          <img src="blue.png" alt="blue" />
        </div>
      </div>
      <div className="footer">
        <div className="formbot">
          <FormBotLogo />
          <p>
            Made with ❤️ by
            <span style={{ textDecoration: "underline" }}> @cuvette</span>
          </p>
        </div>
        <div>
          <p className="footer-title">Product</p>
          <div className="footer-content">
            <p>Status <img className="footer-arrow" src="footer-arrow.png" alt="footer-png" /></p> 
            <p>Documentation <img className="footer-arrow" src="footer-arrow.png" alt="footer-png" /></p>
            <p>Roadmap <img className="footer-arrow" src="footer-arrow.png" alt="footer-png" /></p>
            <p>Pricing</p>
          </div>
        </div>
        <div>
          <p className="footer-title">Community</p>
          <div className="footer-content">
            <p>Discord <img className="footer-arrow" src="footer-arrow.png" alt="footer-png" /></p>
            <p>Github repository <img className="footer-arrow" src="footer-arrow.png" alt="footer-png" /></p>
            <p>Twitter <img className="footer-arrow" src="footer-arrow.png" alt="footer-png" /></p>
            <p>LinkedIn <img className="footer-arrow" src="footer-arrow.png" alt="footer-png" /></p>
            <p>OSS Friends</p>
          </div>
        </div>

        <div>
          <p className="footer-title">Company</p>
          <div className="footer-content">
            <p>About</p>
            <p>Contact</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
