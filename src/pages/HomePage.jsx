import { useEffect, useState } from "react";
import { requestTrendFilms } from "../services/api";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

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
              <h2>Title: {movie.title}</h2>
            </li>
          );
        })}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </ul>
  );
};

export default HomePage;
