import Button from "../../components/Button/Button";
import CardBeneficios from "../../components/CardBeneficios/CardBeneficios";
import CardsMotivos from "../../components/CardsMotivos/CardsMotivos";
import ComoFunciona from "../../components/ComoFunciona/ComoFunciona";
import FormEnvio from "../../components/FormEnvio/FormEnvio";
import "./Usuarios.css";
import Parceiros from "../../components/Parceiros/Parceiros";
import DadosSaude from "../../components/DadosSaude/DadosSaude";

function Usuarios() {
  return (
    <div className="HomePage">
      <div className="containerPaginaTopo">
        <section className="containerPrimeiroTexto">
          <h3>O futuro da saúde no seu bolso</h3>
          <h1 className="tituloContainerPrimeiroTexto">
            Saúde quando, onde e como você quiser. Melhore seu bem estar sem
            filas e com descontos exclusivos pelo seu celular.
          </h1>
          <p>
            Uma rede credenciada de médicos, dentistas, psícologos e muito mais.
            <br></br>Disponíveis para sua equipe, quando, onde e como ela
            quiser. Tudo em uma assinatura que cabe no seu orçamento.
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
            A equipe de sucesso do cliente vai criar um cadastro para você.
          </span>
        </section>
        <img src="../assets/images/banner-left-image.svg" alt="" />
      </div>
      <CardsMotivos />
      <ComoFunciona
        h1="Começando a usar Lab Saúde:"
        titulo1="Crie seu plano personalizado"
        titulo2="Comece a usar HOJE mesmo!"
        texto1="Entraremos em contato para você montar seu plano a partir de R$18/mês e conferir quais os melhores profissionais e descontos para você."
        texto2="Sem carência, marque sua consulta assim que entrar no aplicativo Lab Saúde. Aproveite já. Cancele quando quiser, mas achamos difícil você não gostar."
      />
      <CardBeneficios
        h3="Um novo conceito de benefício"
        h1="Com a Lab, você tem saúde:"
      />
      <Parceiros />
      <DadosSaude
        legend1="Assine online um plano feito especialmente para você"
        legend2="Mais tempo para você fazer o que gosta"
        legend3="Melhore seu o bem estar onde você quiser"
        legend4="Com os profissionais certos para te ajudar"
        h3="Como a saúde digital ajuda você"
        h1="Os dados afirmam que o futuro da saúde PRECISA ser digital"
        primeiroitem="No Brasil, o tempo médio de espera para uma consulta é de 40 minutos;"
        segundoitem="O tempo médio de duração de uma consulta, é de 7 minutos;"
        terceiroitem="Esperar 40 minutos, para ter uma consulta de 7, e ainda sair sem tratamento é chato né? Então a Lab é para você."
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

export default Usuarios;
