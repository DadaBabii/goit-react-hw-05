import { useEffect, useState } from "react";
import { requestTrendFilms } from "../services/api";
// import { requestFilmImage } from "../services/api";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const data = await requestTrendFilms();
        setMovies(data.results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <ul>
      {Array.isArray(movies) &&
        movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <p> {movie.title} </p>
              </Link>
            </li>
          );
        })}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </ul>
  );
};

export default HomePage;

// {`https://image.tmdb.org/t/p/w500${movie.poster_path}`
// const imgUrl = movie.poster_path;
{
  /* <span>{requestFilmImage(imgUrl)}</span> */
}
