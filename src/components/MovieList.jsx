import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movie }) => {
  const location = useLocation();

  return (
    <div>
      <Link state={location} to={`/movies/${movie.id}`}>
        <p> {movie.title} </p>
      </Link>
    </div>
  );
};

export default MovieList;
