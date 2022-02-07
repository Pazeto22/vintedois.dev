import Image from "next/image";
import Logo from "../../../../../../../public/logo/VinteDois48.png";

import s from "./styles.module.scss";

function NavbarLogo() {
  return (
    <div>
      <a className={`${s.navbarLogo} fc-p`} href="#">
        <Image src={Logo} alt="logotipo vintedois.dev" height={48} width={46} />
        <span className="body-b fw-900">VinteDois.dev</span>
      </a>
    </div>
  );
}

export default NavbarLogo;
