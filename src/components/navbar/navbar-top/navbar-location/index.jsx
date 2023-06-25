import { Modal } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editCity } from "../../../../redux/city";
import { editLocationModalVisibility } from "../../../../redux/modal-slice";
import { navbarLocation } from "../../../../utils/data/navbar";
import { LocatinMdalWrapper } from "./style";

const NavbarLocation = () => {
  const { locationModalVisibility } = useSelector((state) => state.modal);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const getCityData = (e) => {
    const { textContent } = e.target;
    localStorage.setItem("city", textContent);
    dispatch(editCity(textContent));
    setValue("");
    dispatch(editLocationModalVisibility());
  };
  const filterNavbarLocation = navbarLocation.filter((item) =>
    item.name.toLocaleLowerCase().includes(value)
  );
  return (
    <Modal
      open={locationModalVisibility}
      onCancel={() => dispatch(editLocationModalVisibility())}
      footer={false}
      width={"60%"}
    >
      <LocatinMdalWrapper>
        <h1>Yetkazish berish shahrini koʻrsating</h1>
        <h2>Oʻzbekiston 41 ta shahriga ertasi kun bepul yetkazib berish:</h2>
        <LocatinMdalWrapper.Input
          allowClear
          placeholder={"Shaharni topish"}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <LocatinMdalWrapper.CityWrapper>
          {filterNavbarLocation.map((item) => (
            <LocatinMdalWrapper.City
              key={item.id}
              onClick={(e) => getCityData(e)}
            >
              {item.name}
            </LocatinMdalWrapper.City>
          ))}
        </LocatinMdalWrapper.CityWrapper>
      </LocatinMdalWrapper>
    </Modal>
  );
};

export default NavbarLocation;
