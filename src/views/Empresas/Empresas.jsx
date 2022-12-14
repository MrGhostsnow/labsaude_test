import Button from "../../components/Button/Button";
import CardBeneficios from "../../components/CardBeneficios/CardBeneficios";
import CardsMotivos from "../../components/CardsMotivos/CardsMotivos";
import ComoFunciona from "../../components/ComoFunciona/ComoFunciona";
import FormEnvio from "../../components/FormEnvio/FormEnvio";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./Empresas.css";
import Parceiros from "../../components/Parceiros/Parceiros";
import DadosSaude from "../../components/DadosSaude/DadosSaude";

function Empresas() {
  return (
    <div className="HomePage">
      <div className="containerPaginaTopo">
        <section className="containerPrimeiroTexto">
          <h3>O futuro da saúde no seu bolso</h3>
          <h1 className="tituloContainerPrimeiroTexto">
            Retenha e atraia os melhores talentos com um ecossistema de saúde em
            forma de benefício pago por uso.
          </h1>
          <p>
            Uma rede credenciada de médicos, dentistas, psícologos e muito mais.
            Disponíveis para sua equipe, quando, onde e como ela quiser. Tudo em
            uma assinatura que cabe no seu orçamento.
          </p>
          <div className="containerForm">
            <FormEnvio
              classNameLabel="labelFormEnvio"
              classNameInput="inputFormEnvio"
              label="Seu melhor e-mail:"
              type="email"
              placeholder="ana.claudia@gmail"
            />
            <Button type="submit" className="btn btnFormEnvio">
              Receber Contato
            </Button>
          </div>
          <span className="spanContainerPrimeiroTexto">
            Você é funcionário? Indique sua empresa acima! O resto é com a gente
          </span>
        </section>
        <img src="../assets/images/banner-left-image.svg" alt="" />
      </div>
      <CardsMotivos />
      <ComoFunciona
        h1="Com a Lab Saúde, sua empresa:"
        titulo1="Define o percentual de cooparticipação"
        titulo2="Sua equipe é atendida com conforto"
        texto1="Dessa forma a empresa paga por uso, e ajuda os custos de saúde da equipe com profissionais de alta qualidade."
        texto2="Sem filas e com bom atendimento, a Lab Saúde se propõe a conectar seus colaboradores com seu máximo bem estar direto do celular."
      />
      <CardBeneficios
        h3="Um novo conceito de benefício"
        h1="Para sua equipe cuidar da saúde:"
      />
      <section className="containerBeneficios">
        <h3>Benefício que cabe no seu bolso</h3>
        <h1>A lab Saúde foi feita para sua empresa</h1>
        <p className="textocontainerBeneficios">
          Nós vivemos na pele a dificuldade de atrair, reter e manter feliz uma
          boa equipe. Por isso, a Lab Saúde foi feita para empresas em
          crescimento, que precisam da melhor equipe com orçamento enxuto.
        </p>
        <Button type="submit" className="btn">
          Receber contato
        </Button>
        <div className="grupoBeneficios">
          <div className="grupo1Beneficios">
            <BsFillCheckCircleFill className="check" />
            <span>01</span>
            <h3>Primeiro mês gratuito</h3>
            <p>
              Implemente a Lab Saúde em horas e teste com sua equipe os
              benefícios do bem estar.
            </p>
          </div>
          <div className="grupo1Beneficios">
            <BsFillCheckCircleFill className="check" />
            <span>02</span>
            <h3>Você escolhe a cooparticipação</h3>
            <p>
              De 0% a 100%, você escolhe como deseja ajudar o time. Diferente de
              planos de saúde, na Lab você só paga quando realmente precisa.
            </p>
          </div>
          <div className="grupo1Beneficios">
            <BsFillCheckCircleFill className="check" />
            <span>03</span>
            <h3>Aumente sua rentabilidade</h3>
            <p>
              Diminua custos de seleção, contratação e turnover retendo sua
              equipe com a Lab Saúde.
            </p>
          </div>
        </div>
      </section>
      <Parceiros />
      <DadosSaude
        legend1="Atraia a melhor equipe"
        legend2="Aumente a felicidade"
        legend3="Melhore o bem estar"
        legend4="Com profissionais certos"
        h3="Como a saúde ajuda sua empresa"
        h1="Os dados afirmam que bem-estar é fundamental para empresas"
        primeiroitem="OMS - 94% das empresas que investem em bem-estar como benefício perceberam o aumento da produtividade;"
        segundoitem="Marsh - 73% dos funcionários desejam ter um aplicativo para achar profissionais de saúde onde e quando quiser;"
        terceiroitem="Marsh - 74% dos gestores acreditam que benefícios de saúde digital ajudam com a retenção de funcionários;"
      />
      <section className="containerFormTel">
        <div className="internoFormTel">
          <img src="../assets/images/lab_logo.svg" alt="logo lab saúde" />
          <h3>Estamos aqui para sua empresa</h3>
          <h1>Entenda se a Lab Saúde pode te ajudar, sem compromisso</h1>
          <p>Solicite uma ligação do nosso time de sucesso do cliente</p>
          <div className="formTel">
            <FormEnvio
              classNameLabel="labelFormEnvio"
              classNameInput="inputFormEnvio"
              label="Seu telefone:"
              placeholder="(xx)xxxxx-xxxx"
            />
            <Button type="submit" className="btn btnFormEnvio">
              Receber contato
            </Button>
          </div>
          <span>
            Você é funcionário? Indique sua empresa acima! O resto é com a gente
          </span>
        </div>
      </section>
    </div>
  );
}

export default Empresas;
