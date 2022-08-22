import Button from '../Button/Button'
import './NavBar.css'
import { Link } from "react-router-dom";
import {useState} from 'react'


function NavBar() {
  const [empresas, setEmpresas] = useState(false)
  const [usuarios, setUsuarios] = useState(false)
  const [profissionais, setProfissionais] = useState(false)

  const handleClickEmpresas = () => {
    setEmpresas(true)
    setProfissionais(false)
    setUsuarios(false)
  }

  const handleClickUsuarios = () => {
    setEmpresas(false)
    setProfissionais(false)
    setUsuarios(true)
  }

  const handleClickProfissionais = () => {
    setEmpresas(false)
    setProfissionais(true)
    setUsuarios(false)
  }


  return (
    <div className='navBar'>
    <nav>
       <div><img src="./assets/images/lab-logo-nav.svg" alt="Logo Lab Saúde" /></div> 
       <ul>
        <Link to={'/'}>
          <li onClick={handleClickEmpresas} className={empresas ? 'btnSelecionado' : 'btnNaoSelecionado'}>Para empresas</li>
        </Link>
        <Link to={'/usuarios'}>
          <li onClick={handleClickUsuarios} className={usuarios ? 'btnSelecionado' : 'btnNaoSelecionado'}>Para usuários</li>
        </Link>
        <Link to={'/profissionais'}>
          <li onClick={handleClickProfissionais} className={profissionais ? 'btnSelecionado' : 'btnNaoSelecionado'}>Para profissionais</li>
        </Link>
       </ul>
        <Button className='btn btnNavBar'>Pedir proposta</Button>
    </nav>
</div>
  )
}

export default NavBar