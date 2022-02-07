import { ReactNode } from "react";

import s from "./styles.module.scss";

interface NavbarWrapperProps {
  children: ReactNode;
}

function NavbarWrapper({ children }: NavbarWrapperProps) {
  return <div className={s.navbarWrapper}>{children}</div>;
}

export default NavbarWrapper;
