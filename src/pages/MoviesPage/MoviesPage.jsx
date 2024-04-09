import { useEffect, useState } from "react";
import css from "./MoviesPage.module.css";
import { requestFilmsByQuery } from "../../services/api";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { Link } from "react-router-dom";
import LoadMoreBtn from "../../components/LoadMoreBtn";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalpages, setTtotalpages] = useState(0);

  useEffect(() => {
    if (query.length === 0) return;

    async function fetchImages() {
      try {
        setError(false);
        setLoading(true);

        const data = await requestFilmsByQuery(query, page);
        console.log(data.results);

        setTtotalpages(data.total_pages);

        setMovies((prevPage) => [...prevPage, ...data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [query, page]);

  const onSearchImages = (inputValue) => {
    if (inputValue === query) {
      setQuery(inputValue);
      setMovies(movies);
    } else {
      setPage(1);
      setMovies([]);
      setQuery(inputValue);
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

  const handleMore = () => {
    setPage((page) => page + 1);
    // console.log(data.results);
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
                <Link to={`/movies/${movie.id}`}>
                  <p> {movie.title} </p>
                </Link>
              </li>
            );
          })}
      </ul>
      {page < totalpages && <LoadMoreBtn onClick={handleMore} />}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
};

export default MoviesPage;
