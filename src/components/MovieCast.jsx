import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { requestFilmCreditsById } from "../services/api";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const MovieCast = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [movieCredits, setMovieCredits] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCast() {
      try {
        setError(false);
        setLoading(true);
        const data = await requestFilmCreditsById(movieId);

        setMovieCredits(data.cast);
        console.log(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    <div>
      {Array.isArray(movieCredits) &&
        movieCredits.map((item) => {
          return (
            <div key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                alt="image"
              />
              <p> name : {item.name}</p>
              <p> character:{item.character}</p>
            </div>
          );
        })}

      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
};

export default MovieCast;
