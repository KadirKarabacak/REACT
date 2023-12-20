import { useEffect, useState } from "react";
import StarRating from "./StarRating";

//! API KEY
// a19da93

// const tempMovieData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt0133093",
//     Title: "The Matrix",
//     Year: "1999",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt6751668",
//     Title: "Parasite",
//     Year: "2019",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//   },
// ];

// const tempWatchedData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     runtime: 148,
//     imdbRating: 8.8,
//     userRating: 10,
//   },
//   {
//     imdbID: "tt0088763",
//     Title: "Back to the Future",
//     Year: "1985",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     runtime: 116,
//     imdbRating: 8.5,
//     userRating: 9,
//   },
// ];

const KEY = "a19da93";

// Whole App
export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("inception");
  // Handle loading data situation, set true at the begining of fetching, and set false at the end.
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  //! To control which dependency array when executed.
  /*
  useEffect(function () {
    console.log("After initial render");
  }, []);

  useEffect(function () {
    console.log("After Every Render");
  });

  useEffect(
    function () {
      console.log("Only Query Update");
    },
    [query]
  );

  console.log("During render");
*/

  // Select the movie from left to right
  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
    // selectedId === id && setSelectedId(null);
  }

  // Clear Selection from right list
  function handleCloseMovie() {
    setSelectedId(null);
  }

  //! To fix infinite re-render loop need useEffect and make it async
  useEffect(
    function () {
      async function fetchMovies() {
        try {
          // At the beginning set the loading and error every time
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );
          const data = await res.json();

          // Handling errors
          if (!res.ok) throw new Error("Something went wrong...");

          // There is no result ?
          if (data.Response === "False") throw new Error("Movie not found.");

          setMovies(data.Search);
          setIsLoading(false);
        } catch (err) {
          // console.error(err.message);
          setError(err.message);
        }
      }

      // At the beginning before search don't show Error
      if (query.length < 3) {
        setMovies([]);
        setError("");
        // And these happens, do not fetch data.
        return;
      }
      fetchMovies();
    },
    [query]
  );

  //! We should't do data fetching in render logic,
  // fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=interstellar
  // `)
  //   .then((res) => res.json())
  //   .then((data) =>setMovies(data.Search));
  //! When we set the state into then, it sends every second api request and never stops.

  //! Also on top level, any other setState makes infinite loop.
  // setWatched([]);
  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>

      <Main>
        {/* Passing Elements as a Prop */}
        {/* <Box element={<MovieList movies={movies} />} /> */}
        <Box>
          {/* its loading and no error. */}
          {isLoading && !error && <Loader />}

          {/* its not loading and no error */}
          {!isLoading && !error && (
            <MovieList onSelect={handleSelectMovie} movies={movies} />
          )}

          {/* error */}
          {error && <ErrorMessage message={error} />}

          {/* no movie found yet, and not loading [ Beginning state ] */}
          {movies.length < 1 && !isLoading && <StartSearching />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              onCloseMovie={handleCloseMovie}
              selectedId={selectedId}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

// Loader before data arrive
function Loader() {
  return <p className="loader">⏳ Loading...</p>;
}

// Error message
function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔</span> {message}
    </p>
  );
}

function StartSearching() {
  return (
    <p className="loader">
      Start searching <span>🔍</span>
    </p>
  );
}

// Navbar itself
function Navbar({ children }) {
  // Used component composition, for fix prop drilling
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

// NavLogo
function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

// NavSearch
function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

// NavResults
function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

// Reusable Button
function Button({ setIsOpen, isOpen }) {
  return (
    <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
      {isOpen ? "–" : "+"}
    </button>
  );
}

// Main Both Rendering API list and Our List
function Main({ children }) {
  return <main className="main">{children}</main>;
}

// List of API Result
function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <Button setIsOpen={setIsOpen} isOpen={isOpen} />
      {isOpen && children}
    </div>
  );
}

// API ListBox Item
function MovieList({ movies, onSelect }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie onSelect={onSelect} movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

// Each movie From API
function Movie({ movie, onSelect }) {
  return (
    <li onClick={() => onSelect(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function MovieDetails({ selectedId, onCloseMovie }) {
  // Handle api data
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(
    function () {
      async function getMovieDetails() {
        try {
          setIsLoading(true);
          // setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
          );
          const data = await res.json();

          // Handling errors
          if (!res.ok) throw new Error("Something went wrong...");

          setMovie(data);
          setIsLoading(false);
        } catch (err) {
          setError(err.message);
        }
      }
      getMovieDetails();
    },
    [selectedId]
  );

  return (
    <div className="details">
      {error && <ErrorMessage message={error} />}
      {isLoading && !error && <Loader />}
      {!isLoading && !error && (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDB rating
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              <StarRating maxRating={10} size={24} />
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

// WatchedBox Item
function WatchedMoviesList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

// Watched Movies
function WatchedMovie({ movie }) {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  );
}

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

// WatchedBox Summary
function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}
