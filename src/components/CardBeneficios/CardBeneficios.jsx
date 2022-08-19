import './CardBeneficios.css'

function CardBeneficios(props) {
  return (
    <div className='sectionCardBeneficios'>
       <h3>{props.h3}</h3> 
       <h1>{props.h1}</h1>
       <div className='containerCardBeneficios'>
        <div className='group1'>
         <div className='cardBeneficio'>
           <h4>Onde quiser</h4>
           <div className='textoeImagem'>
             <p>Seja atendido em qualquer estado do brasil online ou fisicamente</p>
             <img src="./assets/images/where_you_want_icon.webp" alt="" />
           </div>
         </div>
         
         <div className='cardBeneficio'>
           <h4>Quando quiser</h4>
           <div className='textoeImagem'>
             <p>Centenas de profissionais de saúde esperando seu agendamento</p>
             <img src="./assets/images/when_you_want_icon.webp" alt="" />
           </div>
         </div>
         <div className='cardBeneficio'>
           <h4>Como quiser</h4>
           <div className='textoeImagem'>
             <p>Diversas especialidades disponíveis em telemedicina através do celular</p>
             <img src="./assets/images/how_you_want_icon.webp" alt="" />
           </div>
         </div>
        </div>
        <img className='imgCardBeneficios' src="./assets/images/lab-app-cellphone.webp" alt="telefone" />
        <div className='group2'>
            <div className='cardBeneficio'>
              <h4>Com pagamento flexível</h4>
              <div className='textoeImagem'>
                <p>Cooparticação da empresa e até 12x de parcelamento no crédito para consultas</p>
                <img src="./assets/images/flexible_payment_icon.webp" alt="" />
              </div>
            </div>
            <div className='cardBeneficio'>
              <h4>Um perfil de saúde própio</h4>
              <div className='textoeImagem'>
                <p>Salve os atestados e prescrições online e compartilhe com a empresa</p>
                <img src="./assets/images/health_profile_icon.webp" alt="" />
              </div>
            </div>
            <div className='cardBeneficio2'>
              <h4>Sempre com tratamento em mãos</h4>
              <div className='textoeImagem'>
                <p>Nunca esqueça de cumprir as orientações profissionais com lembretes de tratamento da Lab</p>
                <img src="./assets/images/treatment_icon.webp" alt="" />
              </div>
            </div>

        </div>
       </div>
    </div>
  )
}

export default CardBeneficios