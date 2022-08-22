import './Button.css'

function Button(props) {
  return (
    <div>
        <button onClick={props.onClick} className={props.className}>
            {props.children}
        </button>
    </div>
  )
}

export default Button