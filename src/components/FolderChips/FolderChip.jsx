import "./FolderChip.css";

const FolderChip = ({ folder }) => {
  return (
    <div className="folder-chip">
      <p>{folder.name}</p>
      <button>
        <img src="bin.png" alt="Delete" />
      </button>
    </div>
  );
};

export default FolderChip;
