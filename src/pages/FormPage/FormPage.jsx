import "./FormPage.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import { useContext, useEffect, useRef, useState, useCallback } from "react";
import { ThemeContext } from "../../App.jsx";
import FolderModal from "../../components/Modals/FolderModal.jsx";
import FormModal from "../../components/Modals/FormModal.jsx";
import FolderChip from "../../components/FolderChips/FolderChip.jsx";
import Form from "../../components/Form/Form.jsx";
import { getFolders, getForms } from "../../services/index.js";

const FormPage = () => {
  const { theme } = useContext(ThemeContext);
  const [isFolderModal, setIsFolderModal] = useState(false);
  const [isFormModal, setIsFormModal] = useState(false);
  const [folders, setFolders] = useState([]);
  const [forms, setForms] = useState([]);

  const fetchFolders = useCallback(async () => {
    const result = await getFolders();
    if (result.success) {
      setFolders(result.data.folders || []);
    } else {
      console.error(result.error);
    }
  }, []);

  const fetchForms = useCallback(async () => {
    const result = await getForms();
    if (result.success) {
      setForms(result.data.forms || []);
    } else {
      console.error(result.error);
    }
  }, []);

  useEffect(() => {
    fetchFolders();
    fetchForms();
  }, [fetchFolders, fetchForms,]);

  return (
    <div
      className="formpage"
      style={{
        backgroundColor: theme === "light" ? "white" : "#18181B",
        color: theme === "light" ? "#18181B" : "white",
      }}
    >
      {isFolderModal && <FolderModal setModal={setIsFolderModal}
  fetchFolders={fetchFolders} />}
      {isFormModal && <FormModal setModal={setIsFormModal}
  fetchForms={fetchForms} />}
      <Navbar />
      <div className="folder-list">
        <button onClick={() => setIsFolderModal(true)} className="add-folder">
          <img src="addfolder.png" alt="addfolder" />
          Create a folder
        </button>
        {folders.map((folder) => (
          <FolderChip key={folder._id} setFolders={setFolders} folder={folder} />
        ))}
      </div>
      <div className="form-list">
        <button onClick={() => setIsFormModal(true)} className="add-form">
          <img src="add.png" alt="" />
          <span>Create a typebot</span>
        </button>
        {forms.map((form) => (
          <Form key={form._id} setForms={setForms} form={form} />
        ))}
      </div>
    </div>
  );
};

export default FormPage;
