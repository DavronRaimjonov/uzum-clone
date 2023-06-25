import { WraperFlex } from "../style";
import { NavbarTopWrappar, DropdownLang } from "./style";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Container } from "../../../generic/style";
import uzsvg from "../../../assets/image/uzsvg.png";
import { Russvg } from "../../../assets";
import { useDispatch, useSelector } from "react-redux";
import { editLangugage } from "../../../redux/langugage-slice";
import { useTranslation } from "react-i18next";
import NavbarLocation from "./navbar-location";
import { editLocationModalVisibility } from "../../../redux/modal-slice";

const NavbarTop = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const useLang = (e) => {
    localStorage.setItem("lang", e);
    dispatch(editLangugage(e));
  };
  const { lang } = useSelector((state) => state.language);
  const { city } = useSelector((state) => state.city);
  const languageLabel = [
    { id: 1, label: "O'zbekcha", value: "uz" },
    { id: 2, label: "Русский", value: "ru" },
  ];
  return (
    <NavbarTopWrappar>
      <NavbarLocation />
      <WraperFlex>
        <NavbarTopWrappar.Location>
          <EnvironmentOutlined />
          <p>
            {t("navbar_top.city")}
            <span onClick={() => dispatch(editLocationModalVisibility())}>
              {city}
            </span>
          </p>
          <NavbarTopWrappar.Punct>
            {t("navbar_top.punkt")}
          </NavbarTopWrappar.Punct>
        </NavbarTopWrappar.Location>
        <NavbarTopWrappar.Title>
          {t("navbar_top.dostavka")}
        </NavbarTopWrappar.Title>
        <NavbarTopWrappar.Links>
          <a href="https://seller.uzum.uz/">{t("navbar_top.sale")}</a>
          <p>{t("navbar_top.quetion")}</p>
          <p>{t("navbar_top.orders")}</p>
          <DropdownLang>
            {lang === "uz" ? <img src={uzsvg} /> : <Russvg />}
            <DropdownLang.Select
              value={lang}
              onChange={(e) => useLang(e.target.value)}
            >
              {languageLabel.map((language) => (
                <DropdownLang.Language key={language.id} value={language.value}>
                  {language.label}
                </DropdownLang.Language>
              ))}
            </DropdownLang.Select>
          </DropdownLang>
        </NavbarTopWrappar.Links>
      </WraperFlex>
    </NavbarTopWrappar>
  );
};

export default NavbarTop;
