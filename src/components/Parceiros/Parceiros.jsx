import './Parceiros.css'

function Parceiros() {
  return (
    <div className='containerParceiros'>
        <h3>Muito mais que saúde e bem-estar</h3>
        <h1>Uma rede de parceiros com descontos</h1>
        <div className='containerImgParceiros'>
            <div className='cardParceiros'>
                <img src="../assets/images/system_logo.svg" alt="logo system" />
                <legend>System Saúde</legend>
            </div>
            <div className='cardParceiros'>
                <img src="../assets/images/clin_logo.svg" alt="logo clin" />
                <legend> Clin Odonto Digital</legend>
            </div>
            <div className='cardParceiros'>
                <img src="../assets/images/liv_up_logo.svg" alt="logo liv up" />
                <legend>Liv Up</legend>
            </div>
            <div className='cardParceiros'>
                <img src="../assets/images/amazon_logo.svg" alt="logo amazon" />
                <legend>Amazon</legend>
            </div>
            <div className='cardParceiros'>
                <img src="../assets/images/netshoes_logo.svg" alt="logo netshoes" />
                <legend>Netshoes</legend>
            </div>
            <div className='cardParceiros'>
                <img src="../assets/images/drogasil_logo.svg" alt="logo drogasil" />
                <legend>Farmácias Drogasil</legend>
            </div>
        </div>
    </div>
  )
}

export default Parceiros