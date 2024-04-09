import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { requestFilmDetailsById } from "../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [movieGenres, setmovieGenres] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchFilm() {
      try {
        setError(false);
        setLoading(true);
        const data = await requestFilmDetailsById(movieId);

        setMovieInfo(data);
        setmovieGenres(data.genres.map((genre) => genre.name).join(", "));

        console.log(data);
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
      <div>
        <h2> Title : {movieInfo.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w200${movieInfo.poster_path}`}
          alt="image"
        />
        <p>Overview : {movieInfo.overview}</p>
        {movieGenres && <p>Genres: {movieGenres}</p>}
      </div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
};

export default MovieDetailsPage;
