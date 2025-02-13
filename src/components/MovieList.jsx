import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <div className="flex flex-wrap gap-y-5 items-center sm:-mr-6 lg:-mr-3 xl:-mr-6 ">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movies={movie} />
      ))}
    </div>
  );
}
