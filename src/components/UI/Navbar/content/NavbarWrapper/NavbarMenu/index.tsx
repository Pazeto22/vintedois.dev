import NavbarLinks from "./NavbarLinks";
import Image from "next/image";

import s from "./styles.module.scss";
import GithubSvg from "../../../../../../../public/svg/github.svg";
import LinkedinSvg from "../../../../../../../public/svg/linkedin.svg";
import InstagramSvg from "../../../../../../../public/svg/instagram.svg";

function NavbarMenu() {
  return (
    <div className={s.navbarMenuContent}>
      <NavbarLinks />
      <a href="https://github.com/pazeto22" target="_blank" rel="noreferrer">
        <GithubSvg />
      </a>
      <a
        href="https://www.linkedin.com/in/pazeto22/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinSvg />
      </a>
      <a
        href="https://www.instagram.com/gupazeto/"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramSvg />
      </a>
    </div>
  );
}

export default NavbarMenu;
