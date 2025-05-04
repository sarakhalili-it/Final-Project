import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";
export default function Root() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <Header changeLanguage={changeLanguage} />
      <main className=" 2xl:max-w-max-w-8xl xl:max-w-1200px lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-90% mx-auto">
        <Outlet />
      </main>
    </>
  );
}
