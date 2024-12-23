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
      <div className="folder-list">
        <button className="add-folder">
          <img src="addfolder.png" alt="addfolder" />
          Create a folder
        </button>
        <button className="add-folder">
          <img src="addfolder.png" alt="addfolder" />
          Create a folder
        </button>
        <button className="add-folder">
          <img src="addfolder.png" alt="addfolder" />
          Create a folder
        </button>
        <button className="add-folder">
          <img src="addfolder.png" alt="addfolder" />
          Create a folder
        </button>
        <button className="add-folder">
          <img src="addfolder.png" alt="addfolder" />
          Create a folder
        </button>
        <button className="add-folder">
          <img src="addfolder.png" alt="addfolder" />
          Create a folder
        </button>
        <button className="add-folder">
          <img src="addfolder.png" alt="addfolder" />
          Create a folder
        </button>
        <button className="add-folder">
          <img src="addfolder.png" alt="addfolder" />
          Create a folder
        </button>
      </div>
      <div className="form-list">
        <button className="add-form">
          <img src="add.png" alt="" />
          <span>Create a typebot</span>
        </button>
        <button className="add-form">
          <img src="add.png" alt="" />
          <span>Create a typebot</span>
        </button>
        <button className="add-form">
          <img src="add.png" alt="" />
          <span>Create a typebot</span>
        </button>
        <button className="add-form">
          <img src="add.png" alt="" />
          <span>Create a typebot</span>
        </button>
        <button className="add-form">
          <img src="add.png" alt="" />
          <span>Create a typebot</span>
        </button>
        <button className="add-form">
          <img src="add.png" alt="" />
          <span>Create a typebot</span>
        </button>
        <button className="add-form">
          <img src="add.png" alt="" />
          <span>Create a typebot</span>
        </button>
        <button className="add-form">
          <img src="add.png" alt="" />
          <span>Create a typebot</span>
        </button>
      </div>
    </div>
  );
};

export default FormPage;
