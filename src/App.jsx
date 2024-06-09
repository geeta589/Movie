import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

function App() {
  // const apikey ='5dae43e1';
  const apikey = "84283975";
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${apikey}&t=${searchTerm}`
      );
      const data = await res.json();
      console.log(data);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Running useEffect........");
    getMovie("transformers");
  }, []);
  return (
    <>
      <h1>Movies App</h1>
      <Form moviesearch={getMovie} />
      {movie && <MovieDisplay movie={movie} />}
    </>
  );
}

export default App;
