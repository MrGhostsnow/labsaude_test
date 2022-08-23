import "./Footer.css";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div className="containerFooter">
        <img src="../assets/images/logo_lab_footer.svg" alt="logo lab saúde" />
        <BsInstagram className="iconFooter" />
      </div>
      <div className="infoFooter">
        <h2>Informações de contato</h2>
        <span>
          <GoLocation />
          Av. Guararapes, 283 - Santo Antônio, Recife
        </span>
        <span>
          <AiOutlineMail />
          contato@lab-saude.com
        </span>
        <span>
          <BsFillTelephoneFill />
          (81) 9.9999-9999
        </span>
      </div>
    </footer>
  );
}

export default Footer;
