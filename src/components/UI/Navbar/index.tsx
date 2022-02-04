import Container from "components/Container";

import NavbarBg from "./content/NavbarBg";
import NavbarLogo from "./content/NavbarLogo";

function Navbar() {
  return (
    <NavbarBg>
      <Container>
        <NavbarLogo />
      </Container>
    </NavbarBg>
  );
}

export default Navbar;
