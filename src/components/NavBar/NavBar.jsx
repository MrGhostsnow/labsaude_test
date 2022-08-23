import Button from "../Button/Button";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [empresas, setEmpresas] = useState(false);
  const [usuarios, setUsuarios] = useState(false);
  const [profissionais, setProfissionais] = useState(false);
  const [openmenu, setOpenMenu] = useState(false);

  const handleClickEmpresas = () => {
    setEmpresas(true);
    setProfissionais(false);
    setUsuarios(false);
  };

  const handleClickUsuarios = () => {
    setEmpresas(false);
    setProfissionais(false);
    setUsuarios(true);
  };

  const handleClickProfissionais = () => {
    setEmpresas(false);
    setProfissionais(true);
    setUsuarios(false);
  };

  const toggleOpenMenu = () => {
    openmenu ? setOpenMenu(false) : setOpenMenu(true);
    console.log("ok");
  };

  return (
    <div className="navBar">
      <nav>
        <div>
          <img src="./assets/images/lab-logo-nav.svg" alt="Logo Lab Saúde" />
        </div>
        <ul>
          <Link to={"/"}>
            <li
              onClick={handleClickEmpresas}
              className={empresas ? "btnSelecionado" : "btnNaoSelecionado"}
            >
              Para empresas
            </li>
          </Link>
          <Link to={"/usuarios"}>
            <li
              onClick={handleClickUsuarios}
              className={usuarios ? "btnSelecionado" : "btnNaoSelecionado"}
            >
              Para usuários
            </li>
          </Link>
          <Link to={"/profissionais"}>
            <li
              onClick={handleClickProfissionais}
              className={profissionais ? "btnSelecionado" : "btnNaoSelecionado"}
            >
              Para profissionais
            </li>
          </Link>
        </ul>
        <Button className="btn btnNavBar">Pedir proposta</Button>
      </nav>
      <div
        onClick={toggleOpenMenu}
        className={
          openmenu
            ? "hamburger-icon .open .mobile-menu open .bar1 .open .bar2 .open .bar3"
            : "hamburger-icon"
        }
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <ul class="mobile-menu">
          <Link to={"/"}>
            <li
              onClick={handleClickEmpresas}
              className={empresas ? "btnSelecionado" : "btnNaoSelecionado"}
            >
              Para empresas
            </li>
          </Link>
          <Link to={"/usuarios"}>
            <li
              onClick={handleClickUsuarios}
              className={usuarios ? "btnSelecionado" : "btnNaoSelecionado"}
            >
              Para usuários
            </li>
          </Link>
          <Link to={"/profissionais"}>
            <li
              onClick={handleClickProfissionais}
              className={profissionais ? "btnSelecionado" : "btnNaoSelecionado"}
            >
              Para profissionais
            </li>
          </Link>
        </ul>
        <Button className="btn btnNavBar">Pedir proposta</Button>
      </div>
    </div>
  );
}

export default NavBar;
