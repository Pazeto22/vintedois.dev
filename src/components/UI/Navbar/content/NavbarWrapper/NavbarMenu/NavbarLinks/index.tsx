import { useState } from "react";

import s from "./styles.module.scss";

function NavbarLinks() {
  const [activeSection, setActiveSection] = useState(0);
  return (
    <div className={`body-tl ${s.navbarLinks}`}>
      <a
        className={
          activeSection === 0 ? `${s.navbarLink} fw-700` : s.navbarLink
        }
        href="#"
      >
        Início
      </a>
      <a
        className={
          activeSection === 1 ? `${s.navbarLink} fw-700` : s.navbarLink
        }
        href="#"
      >
        Serviços
      </a>
      <a
        className={
          activeSection === 2 ? `${s.navbarLink} fw-700` : s.navbarLink
        }
        href="#"
      >
        Projetos
      </a>
      <a
        className={
          activeSection === 3 ? `${s.navbarLink} fw-500` : s.navbarLink
        }
        href="#"
      >
        Contato
      </a>
    </div>
  );
}

export default NavbarLinks;
