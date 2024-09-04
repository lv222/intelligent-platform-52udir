import "./styles.css";
import { useEffect, useState } from "react";
import MovieList from "./components/MovieList.js";
import Filter from "./components/Filter.js";
import { Router, Link } from "react-router-dom";

export default function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=68e3ba091bcb83af101b4e97cb4ca882&language=en-US"
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <div className="popular-movies">
        {filtered.map((movie) => {
          return <MovieList key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
