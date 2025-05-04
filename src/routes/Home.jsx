import { getgenres } from "../api/genres";
import { getMovies } from "../api/getmovies";
import { getMoviesByGeners } from "../api/getMoviesbyGenres";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import CardSkeleton from "../components/CardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import { useTranslation } from "react-i18next";

export async function loader() {
  const geners = await getgenres();
  const movies = await getMovies();
  return { geners, movies };
}

export default function Home() {
  const { geners, movies } = useLoaderData();
  const [showallgeners, setShowallgeners] = useState(false);
  const visibleGenres = showallgeners ? geners : geners.slice(0, 3);
  const [movieList, setMovieList] = useState(movies.data);
  const [movieCount, setMovieCount] = useState(movies.metadata);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [allMovies, setAllMovies] = useState(movies.data);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchMoreMovies = async () => {
    try {
      const newPage = page + 1;
      let newMovies;

      if (selectedGenre) {
        newMovies = await getMoviesByGeners(selectedGenre, newPage);
      } else {
        newMovies = await getMovies(newPage);
      }

      if (newMovies.data.length === 0) {
        setHasMore(false);
      } else {
        setMovieList((prev) => [...prev, ...newMovies.data]);
        setAllMovies((prev) => [...prev, ...newMovies.data]);
        setPage(newPage);
      }
    } catch (error) {
      console.error("Error fetching more movies:", error);
    }
  };
  const clickhandler = async (event) => {
    const genreName = event.target.textContent.toLowerCase().trim();

    setSelectedGenre(genreName);
    setPage(1);
    setHasMore(true);

    try {
      const filteredMovies = await getMoviesByGeners(genreName, 1);

      setMovieList(filteredMovies.data);
      setMovieCount(filteredMovies.metadata);
      setAllMovies(filteredMovies.data);
    } catch (error) {
      console.error("Error fetching movies by genre:", error);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setMovieList(allMovies);
    } else {
      setMovieList(
        allMovies.filter((movie) =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery, allMovies]);

  const { t, i18n } = useTranslation();

  return (
    <section dir={i18n.language === "fa" ? "rtl" : "ltr"}>
      <section className="w-11/12 sm:w-3/5 xl:w-1/2 py-20 mb-10 bg-transparent">
        <div className="mb-6">
          <h1
            className={`text-grey-50 font-semibold text-64px tracking-tight leading-leading-80px mb-4 ${
              i18n.language === "fa" ? "font-Vazir" : "font-PoppinsRegular"
            }`}
          >
            {t("headerTitle")}
          </h1>
          <p
            className={`${
              i18n.language === "fa" ? "font-Vazir" : "font-PoppinsRegular"
            } text-grey-200 text-base text-justify 2xl:w-3/4 "`}
          >
            {t("headerDescription1")}{" "}
            <span className="text-primary-400">
              {t("headerDescriptionImportant")}
            </span>{" "}
            {t("headerDescription2")} 😉
          </p>
        </div>
        <div className="py-3 px-4 sm:w-3/4 lg:w-2/4 bg-black-10 rounded-xl border border-grey-700 flex justify-center items-center">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="#475069"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 22L20 20"
                stroke="#475069"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("searchContent")}
            className="w-full bg-transparent font-PoppinsRegular border-none focus:ring-0 text-sm text-white-100 placeholder:text-gray-600 leading-4"
          />
        </div>
      </section>

      <ul className="inline-flex flex-wrap p-2 rounded-xl bg-black-20  sm:gap-2 gap-1  mb-6 backdrop-blur">
        <li
          className={`sm:px-8 py-2 px-4 rounded-lg font-PoppinsRegular text-base leading-6 font-semibold cursor-pointer ${
            selectedGenre === null
              ? "bg-purple-400 text-primary-50"
              : "text-grey-300 border border-grey-700"
          }`}
          onClick={async () => {
            setSelectedGenre(null);
            setPage(1);
            setHasMore(true);

            const allMovies = await getMovies(1);
            setMovieList(allMovies.data);
            setMovieCount(allMovies.metadata);
          }}
        >
          All
        </li>
        {visibleGenres.map((gen) => (
          <li
            onClick={clickhandler}
            key={gen.id}
            className={`sm:px-8 py-2 px-4  rounded-lg font-PoppinsRegular text-base leading-6 font-semibold cursor-pointer ${
              selectedGenre === gen.name.toLowerCase().trim()
                ? "bg-purple-400 text-primary-50"
                : "text-grey-300 border border-grey-700"
            }`}
          >
            {gen.name}
          </li>
        ))}
        {!showallgeners && geners.length > 3 && (
          <li
            className="sm:px-4 px-2 py-2 border border-grey-700 rounded-lg font-PoppinsRegular text-base leading-6 font-semibold text-grey-300 cursor-pointer"
            onClick={() => setShowallgeners(true)}
          >
            ...
          </li>
        )}
        {showallgeners && (
          <li
            className="px-4 py-2 border border-grey-700 rounded-lg font-PoppinsRegular text-base leading-6 font-semibold text-grey-300 cursor-pointer"
            onClick={() => setShowallgeners(false)}
          >
            <svg
              className="w-6 h-6 text-grey-300 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
          </li>
        )}
      </ul>

      <section>
        <h3 className="font-PoppinsRegular text-32px font-semibold leading-10 tracking-tight text-grey-400 mb-6">
          {selectedGenre
            ? selectedGenre[0].toUpperCase() + selectedGenre.slice(1)
            : "All"}
          <span className="font-normal text-base leading-6 ">
            {" " + "(" + movieCount.total_count + ")"}
          </span>
        </h3>

        <InfiniteScroll
          dataLength={movieList.length}
          next={fetchMoreMovies}
          hasMore={hasMore}
          loader={<CardSkeleton cards={4} />}
          endMessage={
            <p className="text-center text-gray-500 mt-4">
              No more movies to load!
            </p>
          }
        >
          <MovieList movies={movieList} />
        </InfiniteScroll>
      </section>
    </section>
  );
}
