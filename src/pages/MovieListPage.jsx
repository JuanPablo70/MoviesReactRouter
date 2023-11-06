import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { getMovies } from "../services/movieService"

function MovieCard({ movie }) {
  return (
    <div>
      <Link to={`/movie-detail/${movie.id}`}>
        <h3>{movie.name}</h3>
      </Link>
      <div>{movie.type}</div>
      <div>{movie.times.join(", ")}</div>
      <Link to={`/movie-detail/${movie.id}`}>
        <img src={movie.poster} width="100px" />
      </Link>
    </div>
  );
}

export function MovieListPage () {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams(); // retrieves the parameters from the URL
  const movieType = searchParams.get("type"); // /movie-list?type=3D
  const navigate = useNavigate();

  useEffect(() => {
    getMovies({type: movieType}).then((movieList) => setMovies(movieList));
  }, [movieType]);

  const handle3DClick = () => {
    navigate("/movie-list?type=3D");
  }
  const handle2DClick = () => {
    navigate("/movie-list?type=2D");
  }

  return (
    <section>
      <button onClick={handle3DClick}>3D</button>
      <button onClick={handle2DClick}>2D</button>
      {movies.map((movie) => (
        <MovieCard key={`${movie.name}-${movie.type}`} movie={movie} />
      ))}
    </section>
  );
}