import Container from "components/Container";

import NavbarBg from "./content/NavbarBg";
import NavbarLogo from "./content/NavbarWrapper/NavbarLogo";
import NavbarMenu from "./content/NavbarWrapper/NavbarMenu";
import NavbarWrapper from "./content/NavbarWrapper";

function Navbar() {
  return (
    <NavbarBg>
      <Container>
        <NavbarWrapper>
          <NavbarLogo />
          <NavbarMenu />
        </NavbarWrapper>
      </Container>
    </NavbarBg>
  );
}

export default Navbar;
