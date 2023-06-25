import { Link } from "react-router-dom";
import styled from "styled-components";
export const NavbarMediumWrapper = styled.nav`
  padding: 18px 0;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 888;
`;
NavbarMediumWrapper.Category = styled.div`
  border-radius: 4px;
  background-color: rgba(49, 49, 196, 0.1);
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: rgba(49, 49, 196, 0.2);
  }
  p {
    font-family: Inter;
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    letter-spacing: 0.006em;
    color: #683ccc;
  }
`;
NavbarMediumWrapper.Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(118, 121, 127, 0.3);
  width: 40%;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.2s ease;
  border-radius: 4px;
  height: 40px;
  input {
    margin: 0;
    width: 80%;
    height: 100%;
    font-weight: 400;
    font-size: 0.875rem;
    font-family: Inter, sans-serif;
    outline: none;
    border: none;
    padding: 0 calc(15% + 38px) 0 16px;
    background-color: #fff;
  }
  .search {
    background: rgba(118, 121, 127, 0.05);
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
NavbarMediumWrapper.Icons = styled(Link)`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`;
NavbarMediumWrapper.Icon = styled.nav`
  font-family: Inter;
  padding: 0 12px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    background: #f4f5f5;
  }
  p {
    color: black;
  }
`;
