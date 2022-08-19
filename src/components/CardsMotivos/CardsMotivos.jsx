import './CardsMotivos.css'
import {BsCoin, BsClock, BsHeart, BsWallet2} from 'react-icons/bs'
import {TbHeartbeat} from 'react-icons/tb'

function CardsMotivos() {
  return (
    <>
    <h1 className='titulo'>Porque Lab Saúde:</h1>
    <div className='containerCardsMotivos'>
        <div className='cardMotivo'>
            <p>Aumentar a produtividade da equipe</p>
            <TbHeartbeat className='icon'/>
        </div>
        <div className='cardMotivo'>
            <p>Ter um benefício novo e atraente</p>
            <BsHeart className='icon' />
        </div>
        <div className='cardMotivo'>
            <p>Pare de pagar caro por planos sem uso</p>
            <BsCoin className='icon'/>
        </div>
        <div className='cardMotivo'>
            <p>Ajude seus funcionários com cooparticipação</p>
            <BsWallet2 className='icon' />
        </div>
        <div className='cardMotivo'>
            <p>Sem reajuste por idade, uso ou doenças</p>
            <BsClock className='icon'/>
        </div>
    </div>
    </>
  )
}

export default CardsMotivos