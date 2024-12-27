import { useState, useContext } from "react";
import "./FolderModal.css";
import { createFolder } from "../../services";
import { ThemeContext } from "../../App";

const FolderModal = ({ setModal, fetchFolders }) => {
  const [folderName, setFolderName] = useState("");
  const { theme } = useContext(ThemeContext);

  const handleFolderSubmit = async () => {
    if (!folderName.trim()) {
      alert("Folder name cannot be empty.");
      return;
    }
    const data = { name: folderName };
    const result = await createFolder(data);
    if (result.success) {
      alert("Folder created successfully!");
      setFolderName(""); // Clear the input after success
      setModal(false);
      fetchFolders(); // Fetch updated folders list
    } else {
      alert(result.error || "Failed to create folder.");
    }
  };

  const handleCancel = () => {
    setFolderName(""); // Clear input when cancel is clicked
    setModal(false);
  };

  return (
    <div
      className="folder-modal"
      style={{
        backgroundColor: theme === "light" ? "white" : "#18181B",
        color: theme === "light" ? "#18181B" : "white",
      }}
    >
      <h1>Create a Folder</h1>
      <input
        style={{
          backgroundColor: theme === "light" ? "white" : "rgba(31, 31, 35, 1)",
          color: theme === "light" ? "#18181B" : "white",
        }}
        type="text"
        placeholder="Enter folder name"
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
      />
      <div className="folder-modal-btn">
        <button
          type="button"
          onClick={handleFolderSubmit}
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
        <button
          style={{ color: theme === "light" ? "#18181B" : "white" }}
          type="button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default FolderModal;
