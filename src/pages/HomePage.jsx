import { useEffect, useState } from "react";
import { requestTrendFilms } from "../services/api";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import MovieList from "../components/MovieList/MovieList";

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
    <div>
      <MovieList movies={movies} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
    </div>
  );
};

export default HomePage;
