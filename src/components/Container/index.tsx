import { ReactNode } from "react";

import s from "./styles.module.scss";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div className={s.containerBase}>{children}</div>;
}

export default Container;
