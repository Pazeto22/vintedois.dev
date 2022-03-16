import s from "./styles.module.scss";

function Info() {
  return (
    <div>
      <p className="body-t fc-p u-none">Olá, tudo bem?</p>
      <p className="body-b fc-sl u-none">
        Bem vindo a <span className="body-bb">VinteDois</span>. Eu sou
      </p>
      <h1 className="title-banner fc-s u-none">
        <p>Gustavo</p>
        <p className={s.waveHolder}>
          Pazeto <span className={s.wave}>👋</span>
        </p>
      </h1>
      <h2 className="title-h3 fw-light fc-p u-none">
        Desenvolvedor Front-End,
      </h2>
      <h3 className="title-h3 fw-light fc-p u-none">UI / UX Designer</h3>
    </div>
  );
}

export default Info;
