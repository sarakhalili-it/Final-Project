import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      headerTitle: "MovieCenter",
      headerDescription1: " List of movies and TV Shows, I,",
      headerDescription2:
        "have watched till date. Explore what I have watched and also feel free to make a suggestion.",
      headerDescriptionImportant: "Pramod Poudel",
      searchContent: "Search Movies or TV Shows",
    },
  },
  fa: {
    translation: {
      headerTitle: "مرکز فیلم ",
      headerDescription1: "فهرست فیلم‌ها و سریال‌هایی که من،",
      headerDescription2:
        "، تا به امروز تماشا کرده‌ام. آنچه را که تماشا کرده‌ام بررسی کنید و در صورت تمایل، پیشنهادات خود را ارائه دهید.",
      headerDescriptionImportant: "پرامود پودل",
      searchContent: "جستجوی فیلم‌ها یا نمایش‌های تلویزیونی",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
