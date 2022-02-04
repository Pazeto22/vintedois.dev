import Image from "next/image";
import Logo from "../../../../../../public/logo.png";

import s from "./styles.module.scss";

function NavbarLogo() {
  return (
    <div>
      <Image src={Logo} alt="logotipo vintedois.dev" height={48} width={46} />
    </div>
  );
}

export default NavbarLogo;
