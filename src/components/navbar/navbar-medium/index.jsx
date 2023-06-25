import { Container } from "../../../generic/style";
import { WraperFlex } from "../style";
import { NavbarMediumWrapper } from "./style";
import { Link } from "react-router-dom";
import logo from "../../../assets/image/logo.png";
import category from "../../../assets/image/category.png";
import { Badge } from "antd";
import { LikeSvg, SearchSvg, SHopSvg, UserSvg } from "../../../assets";
const NavbarMedium = () => {
  return (
    <NavbarMediumWrapper>
      <Container>
        <WraperFlex>
          <Link to={"/"}>
            <img src={logo} />
          </Link>
          <NavbarMediumWrapper.Category>
            <img src={category} alt="category" />
            <p>Katalog</p>
          </NavbarMediumWrapper.Category>
          <NavbarMediumWrapper.Search>
            <input type="text" placeholder="Искать товары и категории" />
            <div className="search">
              <SearchSvg />
            </div>
          </NavbarMediumWrapper.Search>
          <NavbarMediumWrapper.Icons>
            <NavbarMediumWrapper.Icon>
              <UserSvg />
              <p>Kirish</p>
            </NavbarMediumWrapper.Icon>
            <NavbarMediumWrapper.Icon>
              <Badge count={1} style={{ backgroundColor: "rgb(112,0,255)" }}>
                <LikeSvg />
              </Badge>
              <p>Saralangan</p>
            </NavbarMediumWrapper.Icon>
            <NavbarMediumWrapper.Icon>
              <Badge count={1} style={{ backgroundColor: "rgb(112,0,255)" }}>
                <SHopSvg />
              </Badge>
              <p>Savat</p>
            </NavbarMediumWrapper.Icon>
          </NavbarMediumWrapper.Icons>
        </WraperFlex>
      </Container>
    </NavbarMediumWrapper>
  );
};

export default NavbarMedium;
