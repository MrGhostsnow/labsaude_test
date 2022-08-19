import Button from '../Button/Button'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navBar'>
        <nav>
           <div><img src="./assets/images/lab-logo-nav.svg" alt="Logo Lab Saúde" /></div> 
           <ul>
            <li><a>Para empresas</a></li>
            <li><a>Para usuários</a></li>
            <li><a>Para profissionais</a></li>
           </ul>
            <Button className='btn btnNavBar'>Pedir proposta</Button>
        </nav>
    </div>
  )
}

export default NavBar