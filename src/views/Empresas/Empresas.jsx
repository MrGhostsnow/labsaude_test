import Button from '../../components/Button/Button'
import CardsMotivos from '../../components/CardsMotivos/CardsMotivos'
import FormEnvio from '../../components/FormEnvio/FormEnvio'
import './Empresas.css'

function Empresas() {
  return (
    <div>
        <div className='containerPaginaTopo'>
            <section className='containerPrimeiroTexto'>
                <h3>O futuro da saúde no seu bolso</h3>
                <h1>Retenha e atraia os melhores talentos com um ecossistema de saúde em forma de benefício pago por uso.</h1>
                <p>Uma rede credenciada de médicos, dentistas, psícologos e muito mais.<br></br>Disponíveis para sua equipe, quando, onde e como ela quiser. Tudo em uma assinatura que cabe no seu orçamento.</p>
                <div className='containerForm'>
                    <FormEnvio
                    classNameLabel='labelFormEnvio'
                    classNameInput='inputFormEnvio'
                    label='Seu melhor e-mail:'
                    type='email'
                    placeholder='ana.claudia@gmail'/>
                    <Button className='btn btnFormEnvio'>Receber Contato</Button>
                </div>
                <span className='spanContainerPrimeiroTexto'>Você é funcionário? Indique sua empresa acima! O resto é com a gente</span>
            </section>
            <img src="./assets/images/banner-left-image.svg" alt="" />
        </div>
        <CardsMotivos/>
    </div>
  )
}

export default Empresas