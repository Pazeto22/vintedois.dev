import NavbarLinks from "./NavbarLinks";
import Image from "next/image";

import s from "./styles.module.scss";
import githubSvg from "../../../../../../../public/svg/github.svg";
import linkedinSvg from "../../../../../../../public/svg/linkedin.svg";
import instagramSvg from "../../../../../../../public/svg/instagram.svg";

function NavbarMenu() {
  return (
    <div className={s.navbarMenuContent}>
      <NavbarLinks />
      <a href="https://github.com/pazeto22" target="_blank" rel="noreferrer">
        <Image
          src={githubSvg}
          alt="logotipo vintedois.dev"
          height={16}
          width={16}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/pazeto22/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={linkedinSvg}
          alt="logotipo vintedois.dev"
          height={16}
          width={16}
        />
      </a>
      <a
        href="https://www.instagram.com/gupazeto/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={instagramSvg}
          alt="logotipo vintedois.dev"
          height={16}
          width={16}
        />
      </a>
    </div>
  );
}

export default NavbarMenu;
