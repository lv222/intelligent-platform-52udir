import { Link, Router } from "react-router-dom";

export default function MovieList({ movie }) {
  return (
    <div>
      <h2>{movie.title} </h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt=""
      />
    </div>
  );
}
