import { deleteForm } from "../../services";
import "./Form.css";

const Form = ({ form, setForms }) => {
  const handleDeleteForm = async (formId) => {
    const result = await deleteForm(formId);
    if (result.success) {
      setForms((prevForms) => prevForms.filter((f) => f._id !== formId));
    } else {
      alert(result.error);
    }
  };

  return (
    <div className="form-component">
      <div>
        <p>{form.name}</p>
        <button onClick={() => handleDeleteForm(form._id)}>Delete Form</button>
      </div>
    </div>
  );
};

export default Form;
