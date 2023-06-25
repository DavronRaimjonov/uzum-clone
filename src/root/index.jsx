import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/home";
import MainLayout from "../layout";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { useSelector } from "react-redux";
import Ru from "../utils/locale/ru";
import Uz from "../utils/locale/uz";
const Root = () => {
  const { lang } = useSelector((state) => state.language);
  i18next.use(initReactI18next).init({
    resources: {
      ru: { translation: Ru },
      uz: { translation: Uz },
    },
    lng: lang,
    fallbackLng: lang,
  });
  useEffect(() => {
    let langugage = localStorage.getItem("lang");
    if (!langugage) {
      localStorage.setItem("lang", "uz");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Root;
