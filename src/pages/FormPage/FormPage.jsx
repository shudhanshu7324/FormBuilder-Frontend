import "./FormPage.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import { useContext } from "react";
import { ThemeContext } from "../../App.jsx";


const FormPage = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div
      className="formpage"
      style={{
        backgroundColor: theme === "light" ? "white" : "#18181B",
        color: theme === "light" ? "#18181B" : "white",
      }}
    >
      <Navbar />
    </div>
  );
};

export default FormPage;
