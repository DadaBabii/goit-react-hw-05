import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { requestFilmReviewsById } from "../services/api";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const MovieReviews = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [movieReviews, setMovieReviews] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      try {
        setError(false);
        setLoading(true);
        const data = await requestFilmReviewsById(movieId);

        setMovieReviews(data.results);
        console.log(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {Array.isArray(movieReviews) && movieReviews.length > 0 ? (
        movieReviews.map((item) => {
          return (
            <div key={item.id}>
              <p> Author : {item.author}</p>
              <p> Review:{item.content}</p>
            </div>
          );
        })
      ) : (
        <p> Sorry, there no Reviews</p>
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
};

export default MovieReviews;
