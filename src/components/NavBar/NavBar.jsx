import Button from '../Button/Button'
import './NavBar.css'
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <div className='navBar'>
    <nav>
       <div><img src="./assets/images/lab-logo-nav.svg" alt="Logo Lab Saúde" /></div> 
       <ul>
        <Link to={'/empresas'}>
          <li><a>Para empresas</a></li>
        </Link>
        <Link to={'/usuarios'}>
          <li><a>Para usuários</a></li>
        </Link>
        <li><a>Para profissionais</a></li>
       </ul>
        <Button className='btn btnNavBar'>Pedir proposta</Button>
    </nav>
</div>
  )
}

export default NavBar