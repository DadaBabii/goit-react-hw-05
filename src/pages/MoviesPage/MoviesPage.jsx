import { useEffect, useRef, useState } from "react";
import css from "./MoviesPage.module.css";
import { requestFilmsByQuery } from "../../services/api";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";

import MovieList from "../../components/MovieList";
import { useSearchParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get("query");
  // const location = useLocation();
  // console.log("location :", location);

  useEffect(() => {
    if (!query) return;

    async function fetchImages() {
      try {
        setError(false);
        setLoading(true);

        const data = await requestFilmsByQuery(query);
        console.log(data.results);

        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [query]);

  const onSearchImages = (inputValue) => {
    if (inputValue === query) {
      setSearchQuery({ query: inputValue });
      setMovies(movies);
    } else {
      setMovies([]);
      setSearchQuery({ query: inputValue });
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const searchInput = evt.target.elements.searchvalue.value.trim();
    if (searchInput === "") {
      console.log("nothing");

      return;
    }
    onSearchImages(searchInput);
  };

  return (
    <div className={css.section}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="searchvalue"
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      <ul className={css.container}>
        {Array.isArray(movies) &&
          movies.map((movie) => {
            return (
              <li key={movie.id}>
                <MovieList movie={movie} />
              </li>
            );
          })}
      </ul>

      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
};

export default MoviesPage;
