import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export default function MovieCard({ movies }) {
  const { id, title, poster, imdb_rating } = movies;

  const customcardTheme = {
    root: {
      base: "p-2 bg-cardbg rounded-xl cursor-pointer hover:shadow-xl box-border relative text-left flex flex-col h-full",
      children: "flex-grow flex flex-col justify-center ",
    },
    img: {
      base: "rounded-lg max-w-full h-[400px] sm:object-cover obiect-contain",
    },
  };

  return (
    <Link
      to={`/movie/${id}`}
      className="block w-full sm:mr-6 lg:mr-3 xl:mr-6 sm:w-[calc(50%-24px)] lg:w-[calc(25%-12px)] xl:w-[calc(25%-24px)]"
    >
      <Card theme={customcardTheme} imgAlt={title} imgSrc={poster}>
        <div className=" flex-grow py-4">
          <h5 className="text-grey-50 font-semibold font-PoppinsRegular text-base p-2 tracking-tight truncate overflow-hidden">
            {title}
          </h5>
          <div className="py-1 px-2 inline-flex gap-1 justify-center items-center bg-black-65 text-warning-500 rounded-lg absolute top-18px left-4">
            <span>
              <svg
                className="w-4 h-4 text-warning-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
              </svg>
            </span>
            <span>{imdb_rating}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
