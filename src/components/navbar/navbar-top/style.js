import styled from "styled-components";
export const NavbarTopWrappar = styled.nav`
  background: #f4f5f5;
  border-radius: 0px;
  font-family: "Inter";
`;
NavbarTopWrappar.Location = styled.nav`
  font-style: normal;
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #141415;
    cursor: pointer;

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 14px;
      color: #141415;
      text-decoration: underline;
    }
  }
`;
NavbarTopWrappar.Punct = styled.nav`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #141415;
`;
NavbarTopWrappar.Title = styled.nav`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: #141415;
  @media (max-width: 1187px) {
    display: none;
  }
`;
NavbarTopWrappar.Links = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
  a,
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: #62656a;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;
export const DropdownLang = styled.div`
  display: flex;
  align-items: center;
  gap: 0 3px;
`;

DropdownLang.Select = styled.select`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  color: #62656a;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
`;
DropdownLang.Language = styled.option`
  cursor: pointer;
  border: none;
`;
