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

  // Fetch folders
  const fetchFolders = useCallback(async () => {
    const result = await getFolders();
    if (result.success) {
      setFolders(result.data.folders || []);
    } else {
      console.error(result.error);
    }
  }, []);

  // Fetch forms
  const fetchForms = useCallback(async () => {
    const result = await getForms();
    if (result.success) {
      setForms(result.data.forms || []);
    } else {
      console.error(result.error);
    }
  }, []);

  // Fetch data when the component mounts
  useEffect(() => {
    fetchFolders();
    fetchForms();
  }, [fetchFolders, fetchForms]);

  // Refetch folders when the folder modal closes
  useEffect(() => {
    if (!isFolderModal) {
      fetchFolders();
    }
  }, [isFolderModal, fetchFolders]);

  // Refetch forms when the form modal closes
  useEffect(() => {
    if (!isFormModal) {
      fetchForms();
    }
  }, [isFormModal, fetchForms]);

  const folderModalRef = useRef(null);
  const formModalRef = useRef(null);

  // Close modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        folderModalRef.current &&
        !folderModalRef.current.contains(event.target)
      ) {
        setIsFolderModal(false);
      }
      if (
        formModalRef.current &&
        !formModalRef.current.contains(event.target)
      ) {
        setIsFormModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="formpage"
      style={{
        backgroundColor: theme === "light" ? "white" : "#18181B",
        color: theme === "light" ? "#18181B" : "white",
      }}
    >
      {isFolderModal && (
        <div ref={folderModalRef}>
          <FolderModal setModal={setIsFolderModal} />
        </div>
      )}
      {isFormModal && (
        <div ref={formModalRef}>
          <FormModal setModal={setIsFormModal} />
        </div>
      )}
      <Navbar />
      <div className="folder-list">
        <button onClick={() => setIsFolderModal(true)} className="add-folder">
          <img src="addfolder.png" alt="addfolder" />
          Create a folder
        </button>
        {folders.map((folder) => (
          <FolderChip key={folder._id} folder={folder} />
        ))}
      </div>
      <div className="form-list">
        <button onClick={() => setIsFormModal(true)} className="add-form">
          <img src="add.png" alt="" />
          <span>Create a typebot</span>
        </button>
        {forms.map((form) => (
          <Form key={form._id} form={form} />
        ))}
      </div>
    </div>
  );
};

export default FormPage;
