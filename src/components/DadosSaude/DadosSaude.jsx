import './DadosSaude.css'

function DadosSaude(props) {
  return (
    <div className='containerDadosSaude'>
        <h3>{props.h3}</h3>
        <h1>{props.h1}</h1>
        <ul>
            <li>{props.primeiroitem}</li>
            <li>{props.segundoitem}</li>
            <li>{props.terceiroitem}</li>
        </ul>
        <div className='containerImgDadosSaude'>
            <div className='cardDadosSaude'>
                <img src="../assets/images/best_team_image.webp" alt="grupo de pessoas" />
                <legend>{props.legend1}</legend>
            </div>
            <div className='cardDadosSaude'>
            <img src="../assets/images/happiness_image.webp" alt="pessoa sorrindo" />
                <legend>{props.legend2}</legend>
            </div>
            <div className='cardDadosSaude'>
            <img src="../assets/images/well_being_image.webp" alt="pessoa meditando" />
                <legend>{props.legend3}</legend>
            </div>
            <div className='cardDadosSaude'>
            <img src="../assets/images/professional_image.webp" alt="médico" />
                <legend>{props.legend4}</legend>
            </div>
        </div>
    </div>
  )
}

export default DadosSaude