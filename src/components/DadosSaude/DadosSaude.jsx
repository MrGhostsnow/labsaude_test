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
                <img src="./assets/images/best_team_image.webp" alt="grupo de pessoas" />
                <legend>Atraia a melhor equipe</legend>
            </div>
            <div className='cardDadosSaude'>
            <img src="./assets/images/happiness_image.webp" alt="pessoa sorrindo" />
                <legend>Aumente a felicidade</legend>
            </div>
            <div className='cardDadosSaude'>
            <img src="./assets/images/well_being_image.webp" alt="pessoa meditando" />
                <legend>Melhore o bem estar</legend>
            </div>
            <div className='cardDadosSaude'>
            <img src="./assets/images/professional_image.webp" alt="médico" />
                <legend>Com profissionais certos</legend>
            </div>
        </div>
    </div>
  )
}

export default DadosSaude