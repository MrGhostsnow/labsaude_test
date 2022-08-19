import './FormEnvio.css'

function FormEnvio(props) {
  return (
    <div>
        <form className='formEnvio'>
            <label 
            className={props.classNameLabel}>{props.label}
            </label>
            <input type={props.type} placeholder={props.placeholder}
            className={props.classNameInput}>
            </input>
        </form>
    </div>
  )
}

export default FormEnvio