import './Form.css'

const Form = ({form}) => {
  return (
    <div className='form-component'>
      {form.name}
      <button className='bin-icon'>
        <img src="bin.png" alt="bin.png" />
      </button>
    </div>
  )
}

export default Form;
