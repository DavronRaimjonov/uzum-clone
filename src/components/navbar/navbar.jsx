import { useSelector } from "react-redux";
import { Container } from "../../generic/style";
import NavbarBotom from "./navbar-bottom";
import NavbarMedium from "./navbar-medium";
import NavbarTop from "./navbar-top";

const Navbar = () => {
  return (
    <>
      <Container>
        <NavbarTop />
      </Container>
      <NavbarMedium />
      <Container>
        <NavbarBotom />
      </Container>
    </>
  );
};

export default Navbar;
