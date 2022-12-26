import React, { useEffect, useState } from "react";
import { Hero, MovieList, Navbar, SearchBox } from "./components";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getAllMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=e65bf900";

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies([responseJson]);
  };

  const searchMovie = async () => {
    const searchUrl = `http://www.omdbapi.com/?s=${searchValue}&apikey=e65bf900`;
    const searchResponse = await fetch(searchUrl);
    const searchResponseJson = await searchResponse.json();

    if (searchResponseJson.Search) {
      setMovies(searchResponseJson.Search);
    }
  };

  useEffect(() => {
    getAllMovieRequest();
    searchMovie()
    
  }, [searchValue]);

 

  
  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList key={movies.id} movies={movies}  />
    </div>
  );
};

export default App;
