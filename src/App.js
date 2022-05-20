import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Movie } from "./components/Movie";
import { Search } from "./components/Search";

const MOVIE_API_URL = "http://www.omdbapi.com/?s=tt3896198&apikey=5f28bece"; // you should replace this with yours

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);
    // fetch(`http://api.traileraddict.com/?film=${searchValue}&count=8`)
    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=5f28bece`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
        } else {
          setErrorMessage(jsonResponse.Error);
        }
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <Header text="Movies" />
      <Search search={search} />
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : movies ? (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.itle}`} movie={movie} />
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
