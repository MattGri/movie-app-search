import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import MovieCard from './components/MovieCard';


function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const searchMovie = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_MOVIE}${search}`
      );
      setMovies(res.data.results);
      setSearch('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div>
        <h1 className="text-center text-3xl">Movies</h1>
        <div>
          <form
            onSubmit={handleSearch}
            className="flex justify-center my-4 space-x-4"
          >
            <input
              type="text"
              placeholder="Search"
              className="input input-info focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="btn" onClick={searchMovie}>
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {movies.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
