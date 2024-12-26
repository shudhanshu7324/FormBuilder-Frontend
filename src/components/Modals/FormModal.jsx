import { useContext, useState } from "react";
import "./FormModal.css";
import { ThemeContext } from "../../App";
import { createForm } from "../../services";

const FormModal = ({setModal}) => {
  const [formName, setFormName] = useState("");
  const { theme, setTheme } = useContext(ThemeContext);

  const handleFormSubmit = async () => {
    if (!formName.trim()) {
      alert("Form name cannot be empty.");
      return;
    }
    const data = { name: formName };
    const result = await createForm(data);
    if (result.success) {
      alert("Form created successfully!");
      setFormName(""); // Clear input on success
      setModal(false)
    } else {
      alert(result.error || "Failed to create form.");
    }
  };

  const handleCancel = () => {
    setFormName(""); // Clear input when cancel is clicked
    setModal(false)
  };

  return (
    <div className="form-modal" style={{
      backgroundColor: theme === "light" ? "white" : "#18181B",
      color: theme === "light" ? "#18181B" : "white",
    }}>
      <h1>Create a form</h1>
      <input
        style={{backgroundColor: theme === "light" ? "white" : "rgba(31, 31, 35, 1)",
          color: theme === "light" ? "#18181B" : "white",}}
        type="text"
        placeholder="Enter form name"
        value={formName}
        onChange={(e) => setFormName(e.target.value)}
      />
      <div className="form-modal-btn">
        <button
          type="button"
          onClick={handleFormSubmit}
          style={{ color: "rgba(75, 131, 255, 1)" }}
        >
          Done
        </button>
        <div
          style={{
            height: "40px",
            width: "1px",
            border: "1px solid rgba(71, 71, 74, 1)",
          }}
        ></div>
        <button style={{color: theme === "light" ? "#18181B" : "white"}} type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default FormModal;
