import Button from '../Button/Button'
import './ComoFunciona.css'

function ComoFunciona(props) {
  return (
    <div className='containerComoFunciona'>
        <h3>Como Funciona</h3>
        <h1>{props.h1}</h1>
        <div className='cardComoFunciona'>
           <div className='passoapasso'>
            <span>1</span>
            <div className='textoPassoaPasso'>
                <h3>{props.titulo1}</h3>
                <p>{props.texto1}</p>
            </div>
           </div> 
           <div className='passoapasso'>
            <span>2</span>
            <div className='textoPassoaPasso'>
                <h3>{props.titulo2}</h3>
                <p>{props.texto2}</p>
            </div>
           </div> 
        </div>
        <Button className='btn btnComoFunciona'>
            Quero assinar
        </Button>
    </div>
  )
}

export default ComoFunciona