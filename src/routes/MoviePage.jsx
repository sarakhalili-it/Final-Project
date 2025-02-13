import { useLoaderData } from "react-router-dom";
import { getMovieById } from "../api/getmoviebyId";
import { Link } from "react-router-dom";
export async function loader({ params }) {
  const movie = await getMovieById(params.id);
  return { movie };
}
export default function MoviePage() {
  const { movie } = useLoaderData();

  return (
    <section className="font-PoppinsRegular">
      <div className="relative sm:h-480px mt-10 rounded-40px ">
        <img
          className="w-full h-full rounded-40px"
          src={movie.backimg}
          alt={movie.name}
        />
        <div className="h-full w-full rounded-40px bg-gradient-to-b from-gradiantbg1 to-gradiantbg2 absolute top-0"></div>
        <div className="md:min-w-[560px] rounded-3xl lg:p-10 p-5 bg-cardbg absolute bottom-0 translate-y-1/2 lg:left-20 lg:right-auto box-border left-2 right-2">
          <p className="mb-2 text-primary-200 flex gap-2 text-xs">
            <Link to="/">
              <span className="cursor-pointer">Home</span>
            </Link>
            <span>/</span>
            <span>Movie</span>
          </p>
          <h3 className=" text-grey-50 font-semibold md:text-32px text-xl leading-10 tracking-tight">
            {movie.name}
          </h3>
        </div>
      </div>
      <div className="md:mt-36 flex lg:gap-20 sm:gap-10 gap-5 lg:flex-nowrap flex-wrap mt-24">
        <div className="lg:max-w-480px lg:h-720px flex-grow flex justify-center items-center">
          <img
            className="max-w-full h-full rounded-3xl"
            src={movie.img}
            alt={movie.name}
          />
        </div>
        <div className="lg:max-w-480px flex flex-col gap-6 items-start">
          <h3 className="text-grey-50  text-2xl leading-8 font-bold tracking-tighter ">
            {movie.name}
          </h3>
          <p className="text-grey-300  text-xl leading-8 text-justify sm:text-left">
            {movie.desc}
          </p>
          <div className="py-1 px-2 inline-flex gap-1 justify-center items-center bg-black-65 text-warning-500 rounded-lg ">
            <span className="font-sans">
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
            <span className="font-sans">{movie.rate}</span>
          </div>
          <div>
            <h3 className=" text-base leading-6 text-grey-400">Type</h3>
            <h3 className="text-xl leading-8 text-grey-100"> {movie.type}</h3>
          </div>
          <div>
            <h3 className=" text-base leading-6 text-grey-400">
              Release Date:
            </h3>
            <h3 className="text-xl leading-8 text-grey-100"> {movie.date}</h3>
          </div>
          <div>
            <h3 className=" text-base leading-6 text-grey-400">Run time</h3>
            <h3 className="text-xl leading-8 text-grey-100"> {movie.time}</h3>
          </div>
          <div>
            <h3 className=" text-base leading-6 text-grey-400">Genres</h3>
            <h3 className="text-xl leading-8 text-grey-100">
              {" "}
              {movie.genres?.join(", ")}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
