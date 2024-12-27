import { deleteFolder } from "../../services";
import "./FolderChip.css";

const FolderChip = ({ folder, setFolders }) => {
  const handleDeleteFolder = async (folderId) => {
    const result = await deleteFolder(folderId);
    if (result.success) {
      setFolders((prevFolders) => prevFolders.filter((folder) => folder._id !== folderId));
    } else {
      alert(result.error);
    }
  };

  return (
    <div className="folder-chip">
      <p>{folder.name}</p>
      <button onClick={() => handleDeleteFolder(folder._id)}>
        <img src="bin.png" alt="Delete" />
      </button>
    </div>
  );
};

export default FolderChip;
