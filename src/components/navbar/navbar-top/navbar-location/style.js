import { Input } from "antd";
import styled from "styled-components";

export const LocatinMdalWrapper = styled.div`
  font-family: "Inter";
  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: 500;
    line-height: 24px;
    color: #000;
  }
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    color: #000;
    padding: 20px 0;
  }
`;
LocatinMdalWrapper.Input = styled(Input)`
  background-color: rgb(247, 247, 247);
  outline: none;
  border-radius: 2px;
  height: 35px;
  border: none;
  color: #0000;

  input {
    background-color: transparent;
    font-family: "Inter";
  }
`;
LocatinMdalWrapper.CityWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 20px;
`;
LocatinMdalWrapper.City = styled.div`
  cursor: pointer;
  border-bottom: #000;
  margin-top: 4px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding-left: 17px;
  font-size: 18px;
  line-height: 18px;
  color: #000;
  font-family: "Roboto";
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
    border-bottom: 1px solid #fff;
  }
`;
