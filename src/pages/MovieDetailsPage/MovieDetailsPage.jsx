import { Routes, Route, Link, useParams, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { requestFilmDetailsById } from "../../services/api";
import css from "./MovieDetailsPage.module.css";
import MovieCast from "../../components/MovieCast";
import MovieReviews from "../../components/MovieReviews";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    async function fetchFilm() {
      try {
        setError(false);
        setLoading(true);
        const data = await requestFilmDetailsById(movieId);
        setMovieInfo(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchFilm();
  }, [movieId]);

  return (
    <div>
      <Link to={backRef.current}> Go back</Link>
      {movieInfo !== null && (
        <div>
          <h2> Title : {movieInfo.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w200${movieInfo.poster_path}`}
            alt="image"
          />
          <p>Overview : {movieInfo.overview}</p>
          <p>
            Genres: {movieInfo.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      )}
      <div className={css.thumb}>
        <Link to="cast">Movie Cast</Link>
        <Routes>
          <Route path="cast" element={<MovieCast movieId={movieId} />} />
        </Routes>
        <Link to="reviews"> Movie reviews</Link>
        <Routes>
          <Route path="reviews" element={<MovieReviews />} />
        </Routes>
      </div>

      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
};

export default MovieDetailsPage;
