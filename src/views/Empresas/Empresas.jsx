import Button from '../../components/Button/Button'
import CardsMotivos from '../../components/CardsMotivos/CardsMotivos'
import ComoFunciona from '../../components/ComoFunciona/ComoFunciona'
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
        <ComoFunciona
        h1='Com a Lab Saúde, sua empresa:'
        titulo1='Define o percentual de cooparticipação'
        titulo2='Sua equipe é atendida com conforto'
        texto1='Dessa forma a empresa paga por uso, e ajuda os custos de saúde da equipe com profissionais de alta qualidade.'
        texto2='Sem filas e com bom atendimento, a Lab Saúde se propõe a conectar seus colaboradores com seu máximo bem estar direto do celular.'/>
    </div>
  )
}

export default Empresas