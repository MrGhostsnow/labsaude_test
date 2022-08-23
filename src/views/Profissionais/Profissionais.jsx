import { useState } from "react";
import "./Profissionais.css";
import FormEnvio from "../../components/FormEnvio/FormEnvio";
import Button from "../../components/Button/Button";

function Profissionais() {
  const [agendamentos, setAgendamentos] = useState(true);
  const [pagamentos, setPagamentos] = useState(false);
  const [gestao, setGestao] = useState(false);
  const [prontuarios, setProntuarios] = useState(false);
  const [telemedicina, setTelemedicina] = useState(false);

  const handleOpenPagamento = () => {
    setPagamentos(true);
    setAgendamentos(false);
    setGestao(false);
    setProntuarios(false);
    setTelemedicina(false);
  };

  const handleOpenAgendamento = () => {
    setPagamentos(false);
    setAgendamentos(true);
    setGestao(false);
    setProntuarios(false);
    setTelemedicina(false);
  };

  const handleOpenGestao = () => {
    setPagamentos(false);
    setAgendamentos(false);
    setGestao(true);
    setProntuarios(false);
    setTelemedicina(false);
  };

  const handleOpenProntuario = () => {
    setPagamentos(false);
    setAgendamentos(false);
    setGestao(false);
    setProntuarios(true);
    setTelemedicina(false);
  };

  const handleOpenTelemedicina = () => {
    setPagamentos(false);
    setAgendamentos(false);
    setGestao(false);
    setProntuarios(false);
    setTelemedicina(true);
  };

  return (
    <div>
      <div className="containerPaginaTopo">
        <section className="containerPrimeiroTexto">
          <h3>Trabalha com consultas e agendamentos?</h3>
          <h1 className="tituloContainerPrimeiroTexto">
            Ganhe mais consultas e diminua o estresse com gestão.
            <strong> Digitalize a experiência do seu paciente.</strong>
          </h1>
          <p>
            Todas as ferramentas que você precisa para digitalizar seu trabalho
            e aumentar seus resultados em apenas uma plataforma. Ganhe mais
            pacientes, com menos esforço.
          </p>
          <div className="containerForm">
            <FormEnvio
              classNameLabel="labelFormEnvio"
              classNameInput="inputFormEnvio"
              label="Seu melhor e-mail:"
              type="email"
              placeholder="ana.claudia@gmail"
            />
            <Button className="btn btnFormEnvio">Receber Contato</Button>
          </div>
          <span className="spanContainerPrimeiroTexto">
            A equipe de Sucesso de Profissionais irá entrar em contato com você!
          </span>
        </section>
        <img src="../assets/images/prof-banner.webp" alt="" />
      </div>
      <div className="containerServiços">
        <div className="containerbtnsServiço">
          <Button
            onClick={handleOpenAgendamento}
            className={agendamentos ? "btn btnClicado" : "btn btnFormEnvio"}
          >
            Agendamento
          </Button>
          <Button
            onClick={handleOpenPagamento}
            className={pagamentos ? "btn btnClicado" : "btn btnFormEnvio"}
          >
            Pagamentos
          </Button>
          <Button
            onClick={handleOpenGestao}
            className={gestao ? "btn btnClicado" : "btn btnFormEnvio"}
          >
            Gestão
          </Button>
          <Button
            onClick={handleOpenProntuario}
            className={prontuarios ? "btn btnClicado" : "btn btnFormEnvio"}
          >
            Prontuários
          </Button>
          <Button
            onClick={handleOpenTelemedicina}
            className={telemedicina ? "btn btnClicado" : "btn btnFormEnvio"}
          >
            Telemedicina
          </Button>
        </div>
        {agendamentos ? (
          <div className="containerCardsServiços">
            <section className="containerPrimeiroTexto">
              <h1>
                Crie sua agenda personalizada para seus pacientes marcarem
                consultas online, a qualquer hora ou dia.
              </h1>
              <p>
                Já imaginou quantos pacientes já tentaram agendar com você a
                noite ou em finais de semana e não conseguiram? Disponibilize
                sua agenda online e deixe seus pacientes acharem o melhor
                horário sem precisar depender de atendimento humano.
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
                  Testar 30 dias grátis
                </Button>
              </div>
              <span className="spanContainerPrimeiroTexto">
                A equipe de Sucesso de Profissionais irá entrar em contato com
                você!
              </span>
            </section>
            <img src="../assets/images/prof-options-img1.webp" alt="" />
          </div>
        ) : null}
        {pagamentos ? (
          <div className="containerCardsServiços">
            <section className="containerPrimeiroTexto">
              <h1>
                Flexibilize pagamentos para seus clientes e melhore sua gestão
                financeira com nossos serviços.
              </h1>
              <p>
                Conquiste mais clientes parcelando consultas online em até 12x e
                receba em d+2. Controlando tudo em nosso painel financeiro com
                serviços para você investir mais no crescimento da sua clínica:
                Antecipação de recebíveis, Capital e giro e mais...
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
                  Testar 30 dias
                </Button>
              </div>
              <span className="spanContainerPrimeiroTexto">
                A equipe de Sucesso de Profissionais irá entrar em contato com
                você!
              </span>
            </section>
            <img src="../assets/images/prof-options-img2.webp" alt="" />
          </div>
        ) : null}
        {gestao ? (
          <div className="containerCardsServiços">
            <section className="containerPrimeiroTexto">
              <h1>
                Gerencie suas consultas, pacientes e pagamentos dentro de um
                portal simples e amigável
              </h1>
              <p>
                Diga “Adeus” as planilhas de excel e agendas de papel.
                Centralize todas as infomações necessárias para sua clínica
                funcionar em apenas um sistema.
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
                  Testar 30 dias
                </Button>
              </div>
              <span className="spanContainerPrimeiroTexto">
                A equipe de Sucesso de Profissionais irá entrar em contato com
                você!
              </span>
            </section>
            <img src="../assets/images/prof-options-img3.webp" alt="" />
          </div>
        ) : null}
        {prontuarios ? (
          <div className="containerCardsServiços">
            <section className="containerPrimeiroTexto">
              <h1>
                Crie prontuários e prescrições digitalmente, atualizando dados
                de pacientes automaticamente.
              </h1>
              <p>
                Crie prescrições pré-definidas para facilitar seu trabalho e
                atualize o prontuário de seus pacientes automaticamente dentro
                da Lab Saúde. Menos trabalho e mais foco no atendimento.
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
                  Testar 30 dias
                </Button>
              </div>
              <span className="spanContainerPrimeiroTexto">
                A equipe de Sucesso de Profissionais irá entrar em contato com
                você!
              </span>
            </section>
            <img src="../assets/images/prof-options-img4.webp" alt="" />
          </div>
        ) : null}
        {telemedicina ? (
          <div className="containerCardsServiços">
            <section className="containerPrimeiroTexto">
              <h1>
                Atenda pacientes de todo brasil de onde você quiser, pelo
                celular ou computador. Adote a telemedicina.
              </h1>
              <p>
                Começe a trabalhar com telemedicina e torne-se uma referência
                nacional ao atender pacientes de todo Brasil. Acelere consultas
                rápidas, análise de exames e consultas de retorno através da
                tecnologia.
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
                  Testar 30 dias
                </Button>
              </div>
              <span className="spanContainerPrimeiroTexto">
                A equipe de Sucesso de Profissionais irá entrar em contato com
                você!
              </span>
            </section>
            <img src="../assets/images/prof-options-img5.webp" alt="" />
          </div>
        ) : null}
      </div>
      <section className="containerComoUsar">
        <h3>Veja como é fácil começar a usar Lab Saúde</h3>
        <h1>
          Cadastre <strong>tudo em minutos</strong>, comece a melhorar seus
          resultados.
        </h1>
        <div className="grupoCardsComoUsar">
          <div className="cardComoUsar">
            <h3>Cadastre sua clínica com informações e horários</h3>
            <img
              src="../assets/images/prof-register-img1.webp"
              alt="etapa 1 de registro"
            />
          </div>
          <div className="cardComoUsar">
            <h3>
              Divulgue sua agenda e aproveite os beneficiários da Lab Empresas
            </h3>
            <img
              src="../assets/images/prof-register-img2.webp"
              alt="etapa 2 de registro"
            />
          </div>
          <div className="cardComoUsar">
            <h3>
              Veja a gestão acontecer sozinha! Mais consultas e mais paz para
              você
            </h3>
            <img
              src="../assets/images/prof-register-img3.webp"
              alt="etapa 3 de registro "
            />
          </div>
        </div>
        <Button type="submit" className="btn btnFormEnvio">
          Testar 30 dias
        </Button>
      </section>
      <section className="containerDadosSaudeProfissionais">
        <h3>A Lab Saúde serve para você...</h3>
        <h1>
          Trabalhamos com centenas de profissionais de saúde de todas as
          especialidades
        </h1>
        <span>
          Conectamos você com uma rede de empresas que os beneficiários buscam
          diariamente por profissionais na Lab Saúde
        </span>
        <img src="./assets/images/lab_para_voce.png" alt="" />
        <legend>Para você melhorar suas redes sociais</legend>
        <span>
          A Lab Saúde promove as ferramentas necessárias para suas redes sociais
          captarem mais pacientes
        </span>
      </section>
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

export default Profissionais;
