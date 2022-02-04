import { ReactNode } from "react";

import s from "./styles.module.scss";

interface NavbarBgProps {
  children: ReactNode;
}

function NavbarBg({ children }: NavbarBgProps) {
  return <div className={s.navbarBg}>{children}</div>;
}

export default NavbarBg;
