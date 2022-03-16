import { ReactNode } from "react";

import s from "./styles.module.scss";

interface NavbarBgProps {
  children: ReactNode;
}

function NavbarBg({ children }: NavbarBgProps) {
  return <div className={`${s.navbarBg} u-none`}>{children}</div>;
}

export default NavbarBg;
