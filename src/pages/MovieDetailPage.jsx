import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/movieService"

export function MovieDetailPage() {
  // retrieves the id from the URL as specified in the Route component within the App component
  const { id } = useParams(); 
  const [movie, setMovie] = useState();

  // once the id changes, searches for the movie corresponding to the updated id
  useEffect(() => {
    getMovieById(id).then(loadedMovie => setMovie(loadedMovie))
  }, [id]);

  if (!movie) {
    return "Loading ...";
  }

  return (
    <article>
      <img src={movie.poster} width="400px" />
      <h2>{movie.name}</h2>
      <div>{movie.type}</div>
      <div>{movie.times.join(", ")}</div>
    </article>
  );
}