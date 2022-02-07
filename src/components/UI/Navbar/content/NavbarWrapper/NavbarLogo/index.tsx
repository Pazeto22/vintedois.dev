import Image from "next/image";
import Logo from "../../../../../../../public/logo/VinteDois48.png";

import s from "./styles.module.scss";

function NavbarLogo() {
  return (
    <div>
      <a className={`${s.navbarLogo} fc-p`} href="#">
        <div
          style={{
            height: "32px",
            width: "32px",
            position: "relative",
          }}
        >
          <Image
            src={Logo}
            alt="logotipo vintedois.dev"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <span className="body-b fw-900">VinteDois.dev</span>
      </a>
    </div>
  );
}

export default NavbarLogo;
