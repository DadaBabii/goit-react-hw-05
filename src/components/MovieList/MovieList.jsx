import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {Array.isArray(movies) &&
        movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link state={location} to={`/movies/${movie.id}`}>
                <p> {movie.title} </p>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
