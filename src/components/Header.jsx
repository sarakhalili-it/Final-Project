import PropTypes from "prop-types";
export default function Header({ changeLanguage }) {
  return (
    <header className="bg-navbar ">
      <nav className=" 2xl:max-w-max-w-8xl xl:max-w-1200px lg:max-w-4xl md:max-w-2xl sm:max-w-xl max-w-90% mx-auto py-5 flex ">
        <a href="/" className="  inline-block ">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.07212 13.2679L20.3716 6.17843C22.5103 4.83673 25.285 6.37935 25.285 8.91058V23.0895C25.285 25.6204 22.5103 27.1633 20.3716 25.8216L9.07212 18.7322C7.0606 17.4699 7.0606 14.5301 9.07212 13.2679Z"
              fill="#1EA5FC"
            />
            <path
              d="M22.9277 13.2679L11.6282 6.17843C9.48955 4.83673 6.71484 6.37935 6.71484 8.91058V23.0895C6.71484 25.6204 9.48955 27.1633 11.6282 25.8216L22.9277 18.7322C24.9392 17.4699 24.9392 14.5301 22.9277 13.2679Z"
              fill="#7B6EF6"
            />
          </svg>
        </a>
        <div className="ml-auto flex space-x-4">
          <button
            onClick={() => changeLanguage("en")}
            className="bg-transparent text-white px-4 py-2 rounded-md hover:bg-blue-500 transition  text-white-100"
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("fa")}
            className="bg-transparent text-white px-4 py-2 rounded-md hover:bg-green-500 transition text-white-100"
          >
            FA
          </button>
        </div>
      </nav>
    </header>
  );
}
Header.propTypes = {
  changeLanguage: PropTypes.func.isRequired, // مشخص کردن اینکه `changeLanguage` باید یک تابع باشد
};
